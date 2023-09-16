import { Component } from '@angular/core';
import { ProducerRepository } from 'src/app/repositories/producer.repository';

@Component({
  selector: 'view-producers',
  templateUrl: './producers-view.template.html',
  styleUrls: ['./producers-view.style.scss'],
})
export class ProducersView {
  loading = true;
  producers: Record<string, any>[] = [];

  constructor(private readonly producersRepository: ProducerRepository) {}

  async ngOnInit(): Promise<void> {
    const { producers } = await this.producersRepository.list();
    this.producers = producers;
    this.loading = false;
  }
}
