import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.page.html',
  styleUrls: ['./detalles-producto.page.scss'],
})
export class DetallesProductoPage implements OnInit {
catalogo: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.catalogo = JSON.parse(this.activatedRoute.snapshot.paramMap.get('catalogo'));
  
  }

}
