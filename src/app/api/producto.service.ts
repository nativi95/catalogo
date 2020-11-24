import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private catalogos: any[]=[
    { "id": "1", "nombre": "El pistolero", "Descripcion": "Autor: Stephen King \n Cronologia: La torre oscura \n numero:1\n", "imagen":"El_pistolero.jpg", "precio": "14.99",  "modelo":"N/A", "marca":"editorial de bolsillo"},
    { "id": "2", "nombre": "La llegada de los tres","Descripcion": "Autor: Stephen King \nCronologia: La torre oscura\n numero:2", "imagen":"La_llegada_de_los_tres.jpg", "precio": "15.99", "modelo":"N/A", "marca":"editorial de bolsillo"},
    { "id": "3", "nombre": "Las tierras baldias", "Descripcion": "Autor: Stephen King \nCronologia: La torre oscura\n numero:3", "imagen":"Las_tierras_baldias.jpg", "precio": "15.99", "modelo":"N/A", "marca":"editorial de bolsillo"},
    { "id": "4", "nombre": "Mago y cristal", "Descripcion": "Autor: Stephen King \nCronologia: La torre oscura\n numero:4", "imagen":"Mago_y_cristal.jpg", "precio": "17.99", "modelo":"N/A", "marca":"editorial de bolsillo"},
    { "id": "5", "nombre": "El viento por la cerradura", "Descripcion": "Autor: Stephen King \nCronologia: La torre oscura\n numero: n/a", "numero":"N/A", "imagen":"El_viento_por_la_cerradura.jpg", "precio": "14.99", "modelo":"N/A", "marca":"editorial de bolsillo"},
    { "id": "6", "nombre": "Lobos del Calla", "Descripcion": "Autor: Stephen King \nCronologia: La torre oscura\n numero:5 ", "imagen":"Lobos_del_Calla.jpg", "precio": "21.99", "modelo":"N/A", "marca":"editorial de bolsillo"},
    { "id": "7", "nombre": "Canción de Susannah", "Descripcion": "Autor: Stephen King \nCronologia: La torre oscura\n numero:6", "imagen":"Cancion_de_susannah.jpg", "precio": "19.99", "modelo":"N/A", "marca":"editorial de bolsillo"},
    { "id": "8", "nombre": "La torre oscura", "Descripcion": "Autor: Stephen King \nCronologia: La torre oscura\n numero:7", "imagen":"La_torre_oscura.jpg", "precio": "24.99", "modelo":"N/A", "marca":"editorial de bolsillo"}, 
  ];
  constructor(private route: Router) { }
  mostrarDetalle(catalogo) {
    this.route.navigate(['detalles-producto', { 'catalogo': JSON.stringify(catalogo) }]);
  }

  public getProductos(){
    return this.catalogos;
  }
}
