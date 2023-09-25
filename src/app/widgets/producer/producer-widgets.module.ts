import { NgModule } from '@angular/core';

import { ProducerCardWidget } from './producer-card/producer-card.component';
import { ProducerFormWidget } from './producer-form/producer-form.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule],
  declarations: [ProducerCardWidget, ProducerFormWidget],
  exports: [ProducerCardWidget, ProducerFormWidget],
})
export class ProducerWidgets {}
