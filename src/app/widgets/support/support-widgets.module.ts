import { NgModule } from '@angular/core';
import { SupportOverviewWidget } from './support-overview/support-overview.component';
import { CommonModule } from '@angular/common';
import { SupportTicketWidget } from './ticket/ticket.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { TicketToolsWidget } from './ticket-tools/ticket-tools.component';

@NgModule({
  imports: [CommonModule, ComponentsModule],
  declarations: [SupportOverviewWidget, SupportTicketWidget, TicketToolsWidget],
  exports: [SupportOverviewWidget, SupportTicketWidget, TicketToolsWidget],
})
export class SupportWidgetsModule {}
