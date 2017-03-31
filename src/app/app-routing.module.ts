import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {View1Component} from './view1/view1.component';
import {View2Component} from './view2/view2.component';
import {View3Component} from './view3/view3.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'view1',
    component: View1Component
  },
  {
    path: 'view2',
    component:View2Component
  },
  {
    path: 'view3/:id',
    component:View3Component
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
