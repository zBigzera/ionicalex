import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurguerPageRoutingModule } from './burguer-routing.module';

import { BurguerPage } from './burguer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurguerPageRoutingModule,

  ],
  declarations: [BurguerPage]
})
export class BurguerPageModule {}
