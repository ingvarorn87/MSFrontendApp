import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http'
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { firestore } from 'firebase/app';
import { IonTabs, IonButton, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {


  imageURL: string
  desc: string

  //@ViewChild('fileButton', {static: true}) fileButton: IonInput

  
  constructor(
    public http: HttpClient,
    public afstore: AngularFirestore,
    public user: UserService) { }

  ngOnInit() {
  }

  createPost(){
    const image = this.imageURL
    const desc = this.desc

    this.afstore.doc(`users/${this.user.getUID()}`)
    .update({
      posts: firestore.FieldValue.arrayUnion({
        image,
        desc
      })

    })
    .then(() =>{
      //update successful(document exists)
    })
    .catch((error) =>{
      // console.log('Error updating user', error); // (document does not exists)
      this.afstore.doc(`users/${this.user.getUID()}`)
      .set({
        image,
        desc
      });
    })
  }

    uploadFile(){
      //this.fileButton.ionInput
    }

    fileChanged(event) {
      const files = event.target.files
    
      const data = new FormData()
      data.append('file', files[0])
      data.append('UPLOADCARE_STORE', '1')
      data.append('UPLOADCARE_PUB_KEY', '53e777a665b2f178b8c1')

      this.http.post('https://upload.uploadcare.com/base/', data)
      .subscribe(event => {
      console.log(event)
      this.imageURL = event.file
      
    })
  }
}
