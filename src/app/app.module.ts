import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Servercomponent } from './servers/server.component';
import { HostComponent } from './host/host.component';
import { BrowserComponent } from './browser/browser.component';

@NgModule({
  declarations: [
    AppComponent,
    Servercomponent,
    HostComponent,
    BrowserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
