import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'component-button',
  templateUrl: './button.template.html',
  styleUrls: ['./button.style.scss'],
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() loading: boolean = false;
  @Input() type: 'dark' | 'light' | 'white' = 'dark';

  @Output() onClickEvent = new EventEmitter<Event>();

  onClick(event: Event): void {
    this.onClickEvent.emit(event);
  }
}
