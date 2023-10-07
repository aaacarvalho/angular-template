import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProducerModel } from 'src/app/models/producer.model';
import { ProducerRepository } from 'src/app/repositories/producer.repository';

@Component({
  selector: 'widget-producer-search',
  templateUrl: './producer-search.template.html',
  styleUrls: ['./producer-search.style.scss'],
})
export class ProducerSearchWidget {
  searchText = '';
  showProducers = false;
  producers: ProducerModel[] = [];
  showNewProducerForm = false;

  loading = true;

  submittingForm = false;
  producerForm = new FormGroup({
    phone: new FormControl(),
  });

  @Output('producerSelected') producerSelected =
    new EventEmitter<ProducerModel>();

  constructor(private readonly producerRepository: ProducerRepository) {}

  async searchProducer(event: any): Promise<void> {
    const producerName = event.target.value;
    this.searchText = producerName;

    if (this.showNewProducerForm) return;

    if (producerName.length > 2) {
      this.loading = true;
      this.showProducers = true;

      this.producers = await this.producerRepository.search(producerName);
      this.loading = false;
    } else {
      this.producers = [];
      this.showProducers = false;
    }
  }

  setProducer(producer: ProducerModel): void {
    this.searchText = producer.user.name;
    this.showProducers = false;

    this.producerSelected.emit(producer);
  }

  createProducer(): void {
    this.showProducers = false;
    this.showNewProducerForm = true;
  }

  submitProducer(): void {
    this.submittingForm = true;

    setTimeout(() => (this.submittingForm = false), 2000);
  }
}
