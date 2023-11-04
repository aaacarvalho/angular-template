import { NgModule } from '@angular/core';
import { ModalityFormWidget } from './modality-form/modality-form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalityMapWidget } from './modality-map/modality-map.component';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'ngx-color-picker';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    ComponentsModule,
    ReactiveFormsModule,
    CommonModule,
    GoogleMapsModule,
    ColorPickerModule,
  ],
  declarations: [ModalityFormWidget, ModalityMapWidget],
  exports: [ModalityFormWidget, ModalityMapWidget],
})
export class ModalityWidgets {}
