import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {ListPageComponent} from './components/list-page/list-page.component';
import {CompletedPageComponent} from './components/completed-page/completed-page.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ListPageComponent, CompletedPageComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatButtonModule, MatToolbarModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
