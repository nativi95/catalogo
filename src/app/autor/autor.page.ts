import { Component, OnInit } from '@angular/core';
import {AutorService} from '../api/autor.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit {

  constructor(public autorServe: AutorService) { }

  ngOnInit() {
  }

}
