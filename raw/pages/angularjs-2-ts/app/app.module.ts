import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppNavigation } from './app.navigation';
import { AppPanel } from './app.panel';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AppNavigation, AppPanel ],
  bootstrap:    [ AppComponent, AppNavigation, AppPanel ]
})
export class AppModule { }
