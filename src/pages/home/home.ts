import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alerCtrl: AlertController) {
  }

doAlert() {
  let alert = this.alerCtrl.create({
    title: 'Hola Amigo!',
    message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
    buttons: ['Ok']
  });
  alert.present()
}
doPrompt() {
  let prompt = this.alerCtrl.create({
    title: 'Recuperar contraseña',
    message: "Ingrese el correo registrado",
    inputs: [
      {
        name: 'title',
        placeholder: 'Mail'
      },
    ],
    buttons: [
      {
        text: 'Cancelar',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Recuperar',
        handler: data => {
          console.log (data)
          this.doConfirm(data)
        }
      }
    ]
  });
  prompt.present();
}
doConfirm(data) {
  let alert = this.alerCtrl.create({
    title: 'Verifique su correo!',
    message: 'Sus credenciales fuero enviadas al correo: \n' + data.title,
    buttons: ['Ok']
  });
  alert.present()
}
}