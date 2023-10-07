import { Component, EventEmitter, Output } from '@angular/core';
import { PropertyModel } from 'src/app/models/property.model';
import { PropertyRepository } from 'src/app/repositories/property.repository';

@Component({
  selector: 'widget-property-search',
  templateUrl: './property-search.template.html',
  styleUrls: ['./property-search.style.scss'],
})
export class PropertySearchWidget {
  searchText = '';
  showProperties = false;
  properties: PropertyModel[] = [];

  loading = true;

  submittingForm = false;

  @Output('propertySelected') propertySelected =
    new EventEmitter<PropertyModel>();

  constructor(private readonly propertyRepository: PropertyRepository) {}

  async searchProperty(event: any): Promise<void> {
    const propertyName = event.target.value;
    this.searchText = propertyName;

    if (propertyName.length > 2) {
      this.loading = true;
      this.showProperties = true;

      this.properties = await this.propertyRepository.list();
      this.loading = false;
    } else {
      this.properties = [];
      this.showProperties = false;
    }
  }

  setProperty(property: PropertyModel): void {
    this.searchText = property.name;
    this.showProperties = false;

    this.propertySelected.emit(property);
  }

  createProperty(): void {
    this.showProperties = false;
  }

  submitProperty(): void {
    this.submittingForm = true;

    setTimeout(() => (this.submittingForm = false), 2000);
  }
}
