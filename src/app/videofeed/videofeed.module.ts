import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideofeedPageRoutingModule } from './videofeed-routing.module';

import { VideofeedPage } from './videofeed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideofeedPageRoutingModule
  ],
  declarations: [VideofeedPage]
})
export class VideofeedPageModule {}
