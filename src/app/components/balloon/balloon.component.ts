import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-balloon',
  templateUrl: './balloon.template.html',
  styleUrls: ['./balloon.style.scss'],
})
export class BalloonComponent {
  @Input('mine') mine = false;
  @Input('content') content = '';
  @Input('createdAt') createdAt = new Date();
}
