import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RyanPage } from './ryan.page';

const routes: Routes = [
  {
    path: '',
    component: RyanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RyanPageRoutingModule {}
