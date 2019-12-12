import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PicturefeedPageRoutingModule } from './picturefeed-routing.module';

import { PicturefeedPage } from './picturefeed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PicturefeedPageRoutingModule
  ],
  declarations: [PicturefeedPage]
})
export class PicturefeedPageModule {}
