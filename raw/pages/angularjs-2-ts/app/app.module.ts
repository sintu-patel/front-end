import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppNavigation } from './app.navigation';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AppNavigation],
  bootstrap:    [ AppComponent, AppNavigation]
})
export class AppModule { }
