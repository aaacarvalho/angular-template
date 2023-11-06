import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'component-drawer',
  templateUrl: './drawer.template.html',
  styleUrls: ['./drawer.style.scss'],
})
export class DrawerComponent {
  @Input('collapsed') collapsed = true;
  @Input('padding') padding = true;

  @Output() drawerCollapsed = new EventEmitter<boolean>();
  @ViewChild('drawer') drawer!: ElementRef;

  close(): void {
    this.drawerCollapsed.emit(true);
  }
}
