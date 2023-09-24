import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'component-input',
  templateUrl: './input.template.html',
  styleUrls: ['./input.style.scss'],
})
export class InputComponent {
  @Input() type:
    | 'text'
    | 'email'
    | 'password'
    | 'phone'
    | 'date'
    | 'number'
    | 'file' = 'text';
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() icon: string = '';
  @Input() mask: string | null = null;

  @Output() inputChangeEvent = new EventEmitter<string>();

  onChange(event: any) {
    this.inputChangeEvent.emit(event.target.value);
  }
}
