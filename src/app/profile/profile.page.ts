import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userPost 

  constructor(private afs: AngularFirestore, private user: UserService) { 
    const posts = afs.doc(`users/${this.user.getUID()}`)
    this.userPost = posts.valueChanges()
  }

  ngOnInit() {
  }

}
