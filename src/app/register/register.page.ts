import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'

import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore'
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  password: string = ""
  cpassword: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    public afstore: AngularFirestore,
    public alertController: AlertController,
    public route: Router,
    public user: UserService
    ) { }

  ngOnInit() {
  }
  async presentAlert(title: string, content: string) {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

    await alert.present()
  }

  async register() {
    const { username, password, cpassword } = this
    if(password !== cpassword)
    {
      this.showAlert("Error!", "Passwords don't match")
      return console.error("Passwords don*t match")
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password)
     
      this.afstore.doc(`users/${res.user.uid}`).set({
        username
      })

      this.user.setUser({
        username,
        uid: res.user.uid
      })

      this.presentAlert('Success', 'You are registered!')
			this.route.navigate(['/tabs'])

    }catch(error) {
      console.dir(error)
      this.showAlert("Error!", error.message)
    }
    

  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ["Ok"]
    })

    await alert.present()
  }

}
