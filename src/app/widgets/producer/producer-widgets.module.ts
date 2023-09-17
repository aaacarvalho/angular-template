import { NgModule } from '@angular/core';
import { ProducerCardWidget } from './producer-card/producer-card.component';
import { ProducerFormWidget } from './producer-form/producer-form.component';

@NgModule({
  declarations: [ProducerCardWidget, ProducerFormWidget],
  exports: [ProducerCardWidget, ProducerFormWidget],
})
export class ProducerWidgets {}
