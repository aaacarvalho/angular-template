import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-logo',
  templateUrl: './logo.template.html',
  styleUrls: ['./logo.style.scss'],
})
export class LogoComponent {
  @Input('type') type: 'dark' | 'light' = 'light';
}
