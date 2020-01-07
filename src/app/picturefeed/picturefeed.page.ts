import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

export interface MyData {
  name: string;
  filepath: string;
  size: number;
  
}

@Component({
  selector: 'app-picturefeed',
  templateUrl: './picturefeed.page.html',
  styleUrls: ['./picturefeed.page.scss'],
})

export class PicturefeedPage {
    
    images: Observable<MyData[]>;
  imageResponse: any;
  options: any;
  private imageCollection: AngularFirestoreCollection<MyData>;
  constructor(private storage: AngularFireStorage, private database: AngularFirestore) { 
      //Set collection where our documents/ images info will save
      this.imageCollection = database.collection<MyData>('images');
      this.images = this.imageCollection.valueChanges();
  }

  ngOnInit() {
  }

}
