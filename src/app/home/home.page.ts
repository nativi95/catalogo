import { Component } from '@angular/core';
import {AutorService} from '../api/autor.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public autorServe: AutorService, private nacCtrl: NavController) {}

  lanzarAutor(){
    this.nacCtrl.navigateForward("autor");//no dirigira al autor
  }

  lanzarProducto(){
    this.nacCtrl.navigateForward("productos");//no dirigira al producto
  }
  
}
