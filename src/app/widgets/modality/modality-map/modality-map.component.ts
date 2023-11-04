import { Component } from '@angular/core';
import { convertArea, getAreaOfPolygon, getPathLength } from 'geolib';
import { ModalityOptions } from 'src/app/types/modality-options.type';

type Coordinate = {
  latitude: number;
  longitude: number;
};

type ModalityShape = {
  id: string;
  name: string;
  type: ModalityOptions;
  area: number;
  distance: number;
  color: string;
  coordinates: Coordinate[];
  polygon: google.maps.Polygon;
  layer: number;
};

const options = {
  SAF: {
    strokeColor: '#865bd4',
    fillColor: '#865bd4',
    editable: true,
  },
  REG: {
    strokeColor: '#196d94',
    fillColor: '#196d94',
    editable: true,
  },
  REC: {
    strokeColor: '#148f47',
    fillColor: '#148f47',
    editable: true,
  },
};

@Component({
  selector: 'widget-modality-map',
  templateUrl: './modality-map.template.html',
  styleUrls: ['./modality-map.style.scss'],
})
export class ModalityMapWidget {
  modality!: ModalityOptions;
  modalityOptions = [
    { label: 'SAF', value: 'SAF' },
    { label: 'REG', value: 'REG' },
    { label: 'REC', value: 'REC' },
  ];

  shapes: ModalityShape[] = [];
  selectedShape!: ModalityShape;

  color: string = '#11a134';
  custom = false;
  name = '';

  selectShape(shapeId: string): void {
    this.shapes.forEach((shape) => {
      if (shape.id === shapeId) {
        this.selectedShape = shape;
        shape.polygon.setOptions({
          strokeWeight: 5,
          fillOpacity: 0.8,
        });
      } else {
        shape.polygon.setOptions({
          strokeWeight: 1,
          fillOpacity: 0.4,
        });
      }
    });
  }

  setModality(modality: ModalityOptions): void {
    this.modality = modality;
    this.drawingManager.setOptions({
      rectangleOptions: options[modality],
      polygonOptions: options[modality],
      circleOptions: options[modality],
    });
  }

  overlays!: google.maps.Polyline;

  htmlElement: any;

  map!: google.maps.Map;
  drawingManager!: google.maps.drawing.DrawingManager;

  ngOnInit(): void {
    this.htmlElement = document.getElementById('map');
    const mapCenter = window.localStorage.getItem('map-center');
    const mapZoom = window.localStorage.getItem('map-zoom');

    const options = {
      center: mapCenter
        ? JSON.parse(mapCenter)
        : { lat: -20.7627, lng: -41.5324 },
      zoom: mapZoom ? JSON.parse(mapZoom) : 17,
      mapTypeId: 'satellite',
    };

    if (this.htmlElement) {
      this.map = new google.maps.Map(this.htmlElement, options);

      this.drawingManager = new google.maps.drawing.DrawingManager({
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [google.maps.drawing.OverlayType.POLYGON],
        },
        map: this.map,
        polygonOptions: {
          zIndex: 1,
        },
      });

      const shapes = localStorage.getItem('shapes');
      if (shapes) {
        const parsedShapes = JSON.parse(shapes);

        parsedShapes.forEach((shape: ModalityShape) => {
          const polygon = new google.maps.Polygon({
            paths: shape.coordinates.map((c) => ({
              lat: c.latitude,
              lng: c.longitude,
            })),
            editable: true,
            map: this.map,
            fillColor: shape.color,
            strokeColor: shape.color,
            fillOpacity: 0.4,
            strokeOpacity: 1,
            strokeWeight: 1,
            visible: true,
            zIndex: shape.layer,
          });

          google.maps.event.addListener(polygon, 'click', () => {
            this.selectShape(shape.id);
          });

          google.maps.event.addListener(polygon.getPath(), 'insert_at', () => {
            this.recalculateArea(shape.id);
            this.selectShape(shape.id);
          });

          google.maps.event.addListener(polygon.getPath(), 'set_at', () => {
            this.recalculateArea(shape.id);
            this.selectShape(shape.id);
          });

          this.shapes = this.shapes.concat({ ...shape, polygon });
        });

        if (this.shapes.length) this.selectShape(this.shapes[0].id);
      }

      google.maps.event.addListener(
        this.drawingManager,
        'overlaycomplete',
        (event: any) => {
          const coordinates = event.overlay.getPath().getArray();

          const mappedCoords = coordinates.map((c: any) => ({
            latitude: c.lat(),
            longitude: c.lng(),
          }));

          const path = coordinates.map((c: any) => [c.lat(), c.lng()]);
          console.log(this.name);
          const newShape: ModalityShape = {
            id: new Date().getTime().toString(),
            area: convertArea(getAreaOfPolygon(path), 'ha'),
            distance: getPathLength(path),
            coordinates: mappedCoords,
            color: event.overlay.strokeColor,
            type: this.modality,
            polygon: event.overlay,
            name: this.name || this.getShapeTypeName(this.modality),
            layer: event.overlay.zIndex,
          };

          this.shapes = [...this.shapes, newShape];
          this.selectShape(newShape.id);

          google.maps.event.addListener(event.overlay, 'click', () => {
            this.selectShape(newShape.id);
          });

          google.maps.event.addListener(
            event.overlay.getPath(),
            'insert_at',
            () => {
              this.recalculateArea(newShape.id);
              this.selectShape(newShape.id);
            }
          );

          google.maps.event.addListener(
            event.overlay.getPath(),
            'set_at',
            () => {
              this.recalculateArea(newShape.id);
              this.selectShape(newShape.id);
            }
          );
        }
      );
    }
  }

  recalculateArea(shapeId: string): void {
    const shape = this.shapes.find((shape) => shape.id === shapeId);

    if (shape) {
      const coordinates: any = shape.polygon.getPath().getArray();
      const mappedCoords = coordinates.map((c: any) => ({
        latitude: c.lat(),
        longitude: c.lng(),
      }));

      const path = coordinates.map((c: any) => [c.lat(), c.lng()]);

      shape.area = convertArea(getAreaOfPolygon(path), 'ha');
      shape.distance = getPathLength(path);
      shape.coordinates = mappedCoords;

      this.shapes = this.shapes
        .filter((shape) => shape.id !== shapeId)
        .concat(shape);
    }
  }

  save(): void {
    const center = this.map.getCenter();
    const zoom = this.map.getZoom();

    if (center)
      window.localStorage.setItem(
        'map-center',
        JSON.stringify({ lat: center?.lat(), lng: center?.lng() })
      );

    if (zoom) window.localStorage.setItem('map-zoom', zoom.toString());

    const shapes = this.shapes.map(({ polygon, ...shape }) => shape);
    const json = JSON.stringify(shapes);
    window.localStorage.setItem('shapes', json);
  }

  removeShape(): void {
    this.shapes = this.shapes.filter(
      (shape) => shape.id !== this.selectedShape.id
    );
    this.selectedShape.polygon.setMap(null);

    this.selectShape(this.shapes[0]?.id);
  }

  formatCurrency(): string {
    const currency = new Intl.NumberFormat('pt-BR', {
      currency: 'BRL',
      style: 'currency',
    });

    return currency.format(this.selectedShape.area * 1527.34);
  }

  getShapeTypeName(type: ModalityOptions): string {
    switch (type) {
      case 'REC':
        return 'Recuperação com Plantio';
      case 'REG':
        return 'Regeneração Natural';
      case 'SAF':
        return 'Sistema Agroflorestal';
    }
  }

  setCustom(value: boolean): void {
    this.custom = value;
  }

  changeColor(value: string): void {
    this.drawingManager.setOptions({
      polygonOptions: {
        strokeColor: value,
        fillColor: value,
      },
    });
  }

  setModalityLayer(layer: number): void {
    this.drawingManager.setOptions({
      polygonOptions: { zIndex: layer },
    });
  }

  setName(event: any): void {
    this.name = event.target.value;
  }
}
