import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'component-drawer',
  templateUrl: './drawer.template.html',
  styleUrls: ['./drawer.style.scss'],
})
export class DrawerComponent {
  @Input('collapsed') collapsed = true;
  @Output() drawerCollapsed = new EventEmitter<boolean>();

  close(): void {
    this.drawerCollapsed.emit(false);
  }
}
