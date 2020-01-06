import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-picturefeed',
  templateUrl: './picturefeed.page.html',
  styleUrls: ['./picturefeed.page.scss'],
})
export class PicturefeedPage implements OnInit {
  imageResponse: any;
  options: any;

  constructor() { }

  ngOnInit() {
  }

}
