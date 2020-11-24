import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../api/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //arreglo encapsulador del formulario
  formulario: FormGroup;

  //arreglo privado para manejar el formulario
  private recibido: any[];

  constructor(public formBuilder: FormBuilder, private loginService: LoginService) {

    //inicializacion de FormBuilder
    this.formulario = this.createForm();
  }

  ngOnInit() {
  }

  /**
     * @version 1
     * @author Juan Carlos Ruiz Nativi
     * @carnet RN100216
     * Metodo encargado de inicializar un FormBuilder con sus respectivos campos
     */
  private createForm() {
    return this.formBuilder.group({
      user: ["", Validators.required],
      pass: ["", Validators.required]
    });
  }

  /**
     * @version 1
     * @author Juan Carlos Ruiz Nativi
     * @carnet RN100216
     * Metodo encargado de encapsular la informacion del formulario en un arreglo
     * ejecuta el servicio para validar el login
     */
  DoLogin() {
    this.recibido = this.formulario.value;
    this.loginService.loginValidate(this.recibido);
  }
}
