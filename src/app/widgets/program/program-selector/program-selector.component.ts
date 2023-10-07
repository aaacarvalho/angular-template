import { Component, EventEmitter, Output } from '@angular/core';
import { ProgramModel } from 'src/app/models/program.model';

@Component({
  selector: 'widget-program-selector',
  templateUrl: './program-selector.template.html',
  styleUrls: ['./program-selector.style.scss'],
})
export class ProgramSelectorWidget {
  @Output('programSelected') programSelected = new EventEmitter<ProgramModel>();

  programs = [
    {
      id: '1',
      name: 'Reflorestar',
      icon: 'assets/icons/plant.svg',
    },
    {
      id: '2',
      name: 'Carbono Zero',
      icon: 'assets/icons/carbon-cycle.svg',
    },
  ];

  selectProgram(id: string): void {
    const program = this.programs.find((program) => program.id === id);
    this.programSelected.emit(program);
  }
}
