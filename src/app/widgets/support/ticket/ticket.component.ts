import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-support-ticket',
  templateUrl: './ticket.template.html',
  styleUrls: ['./ticket.style.scss'],
})
export class SupportTicketWidget {
  @Input('ticket') ticket: any = {};

  drawerOpen = false;
  newMessage = '';

  removeTag(id: string): void {
    this.ticket = {
      ...this.ticket,
      tags: this.ticket.tags.filter((tag: any) => tag.id !== id),
    };
  }

  openDrawer(): void {
    this.drawerOpen = true;
  }

  closeDrawer(): void {
    this.drawerOpen = false;
  }

  updateNewMessage(event: any): void {
    this.newMessage = event.target.value;
  }

  submitMessage(): void {
    this.ticket.messages.push({
      me: true,
      content: this.newMessage,
      createdAt: new Date(),
    });

    this.newMessage = '';
  }
}
