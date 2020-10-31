import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesProductoPage } from './detalles-producto.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesProductoPageRoutingModule {}
