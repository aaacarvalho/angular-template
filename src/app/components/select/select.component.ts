import { Component, EventEmitter, Input, Output } from '@angular/core';

type SelectOptions = {
  label: string;
  value: string;
};

@Component({
  selector: 'component-select',
  templateUrl: './select.template.html',
  styleUrls: ['./select.style.scss'],
})
export class SelectComponent {
  @Input('label') label = '';
  @Input('options') options: SelectOptions[] = [];
  @Input('value') value = '';

  @Output('optionSelected') optionSelectedEvent = new EventEmitter();

  selectValue(event: any): void {
    this.value = event.target.value;
    this.optionSelectedEvent.emit(this.value);
  }
}
