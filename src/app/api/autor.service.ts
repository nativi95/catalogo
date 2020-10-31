import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  autorInfo: any[]=[
    { "carnet": "rn100216", "nombre": "Juan Carlos", "apellido": "Ruiz Nativi", "imagen": "autor.jpg"},
  ];
  constructor() { }
}
