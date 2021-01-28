import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListPageComponent} from './components/list-page/list-page.component';
import {CompletedPageComponent} from './components/completed-page/completed-page.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: ListPageComponent,
  },
  {
    path: 'list',
    component: ListPageComponent,
  },
  {
    path: 'completed',
    component: CompletedPageComponent,
  },
  {
    path: 'registration',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
