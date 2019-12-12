import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicturefeedPage } from './picturefeed.page';

const routes: Routes = [
  {
    path: '',
    component: PicturefeedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PicturefeedPageRoutingModule {}
