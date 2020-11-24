import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //constante de control alert de toastControl segun color
  private const DANGER:string="danger";
  private const SUCCESS:string="success";

  // variable privada para almacenar mensaje
  private mensaje: string;

  constructor(public toastCtrl: ToastController, public router: Router) { }

   /**
     * @version 1
     * @author Juan Carlos Ruiz Nativi
     * @carnet RN100216
     * 
     * Metodo encargado de imprimir en consola los datos capturados en el formulario
     */
    printConsole(recibido:any[]) {
      console.log("++++++++++++ usuario: " + recibido["user"] + " La contrasena: " + recibido["pass"] + " ++++++++++++");
    }



      /**
     * @version 1
     * @author Juan Carlos Ruiz Nativi
     * @carnet RN100216
     * @param msj mensaje que contendra el formulario
     * @param alertType tipo de mensaje que toast definido por el color
     * Metodo encargado de construir y mostrar un mensaje Toast en pantalla 
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


  /**
     * @version 1
     * @author Juan Carlos Ruiz Nativi
     * @carnet RN100216
     * @param recibido arreglo que contiene las credenciales capturadas
     * Metodo encargado de encapsular la informacion del formulario en un arreglo
     * ejecuta el servicio para validar el login
     */
  public loginValidate(recibido:any[]){
    this.printConsole(recibido);
    if (recibido['user'] === "admin" && recibido['pass'] === "admin") {//validacion de credenciales

      //caso afirmativo
      this.mensaje = "Bienvenido <b>" + recibido['user']+"</b>";
      this.mostratToast(this.mensaje, this.SUCCESS);

      //redireccionamiento al elemento home
      this.router.navigateByUrl("home");
    } else {
      //caso negativo
      this.mensaje = "Las credenciales no son validas";
      this.mostratToast(this.mensaje, this.DANGER);
    }
  }
}
