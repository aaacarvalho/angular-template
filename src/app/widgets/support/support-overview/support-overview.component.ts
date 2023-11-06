import { Component } from '@angular/core';

@Component({
  selector: 'widget-support-overview',
  templateUrl: './support-overview.template.html',
  styleUrls: ['./support-overview.style.scss'],
})
export class SupportOverviewWidget {
  selected = '';

  selectCard(option: string): void {
    if (option === this.selected) this.selected = '';
    else this.selected = option;
  }
}
