import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pg1Page } from './pg1.page';

const routes: Routes = [
  {
    path: '',
    component: Pg1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pg1PageRoutingModule {}
