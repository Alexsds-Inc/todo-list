import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ListPageComponent} from './components/list-page/list-page.component';
import {CompletedPageComponent} from './components/completed-page/completed-page.component';
import {ListItemComponent} from './components/list-item/list-item.component';
import {TodoService} from './shared/services/todo.service';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ListPageComponent, CompletedPageComponent, ListItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
