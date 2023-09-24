import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-producer-card',
  templateUrl: './producer-card.template.html',
  styleUrls: ['./producer-card.style.scss'],
})
export class ProducerCardWidget {
  email = '';
  @Input('producer') producer: Record<string, any> = {};

  ngOnInit() {
    this.email =
      this.producer.user.name.toLowerCase().replaceAll(' ', '_') + '@gmail.com';
  }

  openWppWeb(phone: string) {
    window.open(`https://wa.me/${phone}`, 'blank');
  }

  sendEmail() {
    const mailText = 'mailto:alvaro.azeredo@hotmail.com';
    window.location.href = mailText;
  }
}
