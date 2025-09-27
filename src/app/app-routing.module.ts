import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rayane',
    loadChildren: () => import('./rayane/rayane.module').then( m => m.RayanePageModule)
  },
  {
    path: 'ryan',
    loadChildren: () => import('./ryan/ryan.module').then( m => m.RyanPageModule)
  },
  {
    path: 'giulia',
    loadChildren: () => import('./giulia/giulia.module').then( m => m.GiuliaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
