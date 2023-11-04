import { Component } from '@angular/core';

@Component({
  selector: 'view-support',
  templateUrl: './support-view.template.html',
  styleUrls: ['./support-view.style.scss'],
})
export class SupportView {
  selected = '';

  selectCard(option: string): void {
    if (option === this.selected) this.selected = '';
    else this.selected = option;
  }
}
