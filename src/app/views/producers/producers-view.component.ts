import { Component } from '@angular/core';
import { ProducerRepository } from 'src/app/repositories/producer.repository';

@Component({
  selector: 'view-producers',
  templateUrl: './producers-view.template.html',
  styleUrls: ['./producers-view.style.scss'],
})
export class ProducersView {
  loading = true;
  showFormDrawer = false;
  totalProducers: Record<string, any>[] = [];
  currentProducers: Record<string, any>[] = [];

  constructor(private readonly producersRepository: ProducerRepository) {}

  async ngOnInit(): Promise<void> {
    const { producers } = await this.producersRepository.list();
    this.totalProducers = producers;
    this.currentProducers = producers;
    this.loading = false;
  }

  searchFor(text: string): void {
    text.length >= 3
      ? (this.currentProducers = this.totalProducers.filter((producer) =>
          producer.user.name.toLowerCase().includes(text)
        ))
      : (this.currentProducers = this.totalProducers);
  }

  openFormDrawer() {
    this.showFormDrawer = true;
  }

  closeFormDrawer() {
    this.showFormDrawer = false;
  }
}
