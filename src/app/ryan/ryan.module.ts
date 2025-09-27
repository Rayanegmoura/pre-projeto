import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RyanPageRoutingModule } from './ryan-routing.module';

import { RyanPage } from './ryan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RyanPageRoutingModule
  ],
  declarations: [RyanPage]
})
export class RyanPageModule {}
