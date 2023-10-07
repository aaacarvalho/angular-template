import { NgModule } from '@angular/core';
import { PropertySearchWidget } from './property-search/property-search.component';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ComponentsModule } from 'src/app/components/components.module';
import { PropertyRepository } from 'src/app/repositories/property.repository';

@NgModule({
  providers: [PropertyRepository],
  imports: [CommonModule, NgxSkeletonLoaderModule, ComponentsModule],
  declarations: [PropertySearchWidget],
  exports: [PropertySearchWidget],
})
export class PropertyWidgets {}
