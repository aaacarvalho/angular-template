import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'component-input',
  templateUrl: './input.template.html',
  styleUrls: ['./input.style.scss'],
})
export class InputComponent {
  @Input() type: 'text' | 'email' | 'password' | 'phone' = 'text';
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() icon: string = '';

  @Output() inputChangeEvent = new EventEmitter<string>();

  onChange(event: any) {
    this.inputChangeEvent.emit(event.target.value);
  }
}
