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

  printConsole() {
    console.log("++++++++++++ usuario: " + this.recibido["user"] + " La contrasena: " + this.recibido["pass"] + " ++++++++++++");
  }

  DoLogin() {
    this.recibido = this.formulario.value;
    this.printConsole();
    if (this.recibido['user'] === "admin" && this.recibido['pass'] === "admin") {
      this.mensaje = "Bienvenido " + this.recibido['user'];
      this.mostratToast(this.mensaje);
      this.router.navigateByUrl("home");
    } else {
      this.mensaje = "Las credenciales no son validas";
      this.mostratToast(this.mensaje);
    }
  }

  async mostratToast(msj: string) {
    const toast = await this.toastCtrl.create({
      message: msj,
      duration: 3000,
      position: "top"
    });
    toast.present();
  }
}
