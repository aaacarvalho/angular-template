import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'component-quantity-selector',
  templateUrl: './quantity-selector.template.html',
  styleUrls: ['./quantity-selector.style.scss'],
})
export class QuantitySelectorComponent {
  @Input('default') default = 0;
  @Input('min') min = 0;
  @Input('max') max: number = 999;
  value!: number;

  @Output() onNumberChange = new EventEmitter<number>();

  ngOnInit(): void {
    this.value = this.default;
  }

  numberChanged(event: any): any {
    this.value = Number(event.target.value);
    this.onNumberChange.emit(this.value);
  }

  increase(): void {
    if (this.value < this.max) this.value = this.value + 1;
  }

  decrease(): void {
    if (this.value > this.min) this.value = this.value - 1;
  }
}
