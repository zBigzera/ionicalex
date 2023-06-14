import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicialPageRoutingModule } from './inicial-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InicialPage } from './inicial.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicialPageRoutingModule,
    HttpClientModule
  
  ],
  declarations: [InicialPage]
})
export class InicialPageModule {}
