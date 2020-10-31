import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../api/producto.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor(public catalogo: ProductoService) { }

  mostrarDetalle(catalogo){
    this.catalogo.mostrarDetalle(catalogo);
  }

  ngOnInit() {
  }

}
