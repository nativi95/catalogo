import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulario: FormGroup;
  recibido: any[];
  mensaje: string;
  private const DANGER:string="danger";
  private const SUCCESS:string="success"; 

  constructor(public toastCtrl: ToastController, public formBuilder: FormBuilder, public router: Router) {
    this.formulario = this.createForm();
  }

  ngOnInit() {
  }

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
     * Metodo encargado de imprimir en consola los datos capturados en el formulario
     */
  printConsole() {
    console.log("++++++++++++ usuario: " + this.recibido["user"] + " La contrasena: " + this.recibido["pass"] + " ++++++++++++");
  }

  /**
     * @version 1
     * @author Juan Carlos Ruiz Nativi
     * @carnet RN100216
     * Metodo encargado de encapsular la informacion del formulario en un arreglo
     * Valida credenciales y redireciona a la pagina home con los datos correctos
     * CRUD - sentencia UPDATE
     */
  DoLogin() {
    this.recibido = this.formulario.value;
    this.printConsole();
    if (this.recibido['user'] === "admin" && this.recibido['pass'] === "admin") {
      this.mensaje = "Bienvenido <b>" + this.recibido['user']+"</b>";
      this.mostratToast(this.mensaje, this.SUCCESS);
      this.router.navigateByUrl("home");
    } else {
      this.mensaje = "Las credenciales no son validas";
      this.mostratToast(this.mensaje, this.DANGER);
    }
    
  }

  /**
     * @version 1
     * @author Juan Carlos Ruiz Nativi
     * @carnet RN100216
     * Metodo encargado de mostrar un mensaje Toast en pantalla 
     */
  async mostratToast(msj: string, alertType:string) {
    const toast = await this.toastCtrl.create({
      message: msj,
      duration: 3000,
      position: "top",
      color: alertType
    });
    toast.present();
  }
}
