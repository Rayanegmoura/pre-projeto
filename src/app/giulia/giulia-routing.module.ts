import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiuliaPage } from './giulia.page';

const routes: Routes = [
  {
    path: '',
    component: GiuliaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiuliaPageRoutingModule {}
