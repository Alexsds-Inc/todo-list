import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListPageComponent} from './components/list-page/list-page.component';
import {CompletedPageComponent} from './components/completed-page/completed-page.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
