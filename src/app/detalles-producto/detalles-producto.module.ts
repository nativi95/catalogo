import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesProductoPageRoutingModule } from './detalles-producto-routing.module';

import { DetallesProductoPage } from './detalles-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesProductoPageRoutingModule
  ],
  declarations: [DetallesProductoPage]
})
export class DetallesProductoPageModule {}
