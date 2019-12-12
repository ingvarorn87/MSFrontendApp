import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideofeedPage } from './videofeed.page';

const routes: Routes = [
  {
    path: '',
    component: VideofeedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideofeedPageRoutingModule {}
