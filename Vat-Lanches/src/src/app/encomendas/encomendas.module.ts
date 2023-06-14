import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncomendasPageRoutingModule } from './encomendas-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EncomendasPage } from './encomendas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncomendasPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [EncomendasPage]
})
export class EncomendasPageModule {}
