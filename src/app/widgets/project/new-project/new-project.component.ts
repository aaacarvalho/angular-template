import { Component } from '@angular/core';
import { ProducerModel } from 'src/app/models/producer.model';
import { ProgramModel } from 'src/app/models/program.model';
import { PropertyModel } from 'src/app/models/property.model';

@Component({
  selector: 'widget-new-project',
  templateUrl: './new-project.template.html',
  styleUrls: ['./new-project.style.scss'],
})
export class NewProjectWidget {
  activeStep = 'program';
  selectedProgram!: ProgramModel;
  selectedProducer!: ProducerModel;
  selectedProperty!: PropertyModel;

  setActiveStep(step: string): void {
    this.activeStep = step;
  }

  selectProgram(program: ProgramModel): void {
    this.selectedProgram = program;
    this.activeStep = 'producer';
  }

  selectProducer(producer: ProducerModel): void {
    this.selectedProducer = producer;
  }

  selectProperty(property: PropertyModel): void {
    this.selectedProperty = property;
  }
}
