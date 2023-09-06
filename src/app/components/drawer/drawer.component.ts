import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'component-drawer',
  templateUrl: './drawer.template.html',
  styleUrls: ['./drawer.style.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DrawerComponent {
  collapsed = false;

  toggle(): void {
    this.collapsed = !this.collapsed;
  }
}
