import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiuliaPageRoutingModule } from './giulia-routing.module';

import { GiuliaPage } from './giulia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiuliaPageRoutingModule
  ],
  declarations: [GiuliaPage]
})
export class GiuliaPageModule {}
