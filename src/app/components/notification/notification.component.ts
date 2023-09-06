import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-notification',
  templateUrl: './notification.template.html',
  styleUrls: ['./notification.style.scss'],
})
export class NotificationComponent {
  @Input() message: string = 'This is my notification';
  @Input() type: 'error' | 'warning' | 'message' = 'error';
}
