import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RayanePageRoutingModule } from './rayane-routing.module';

import { RayanePage } from './rayane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RayanePageRoutingModule
  ],
  declarations: [RayanePage]
})
export class RayanePageModule {}
