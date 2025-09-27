import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RayanePage } from './rayane.page';

const routes: Routes = [
  {
    path: '',
    component: RayanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RayanePageRoutingModule {}
