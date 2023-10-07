import { NgModule } from '@angular/core';

import { ProducerCardWidget } from './producer-card/producer-card.component';
import { ProducerFormWidget } from './producer-form/producer-form.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProducerSearchWidget } from './producer-search/producer-search.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
  ],
  declarations: [ProducerCardWidget, ProducerFormWidget, ProducerSearchWidget],
  exports: [ProducerCardWidget, ProducerFormWidget, ProducerSearchWidget],
})
export class ProducerWidgetsModule {}
