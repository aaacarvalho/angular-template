import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { WidgetsModule } from './widgets/widgets.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ViewsModule, WidgetsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
