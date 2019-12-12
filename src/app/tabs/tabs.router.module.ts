import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';
import {NgModule} from '@angular/core'

const routes: Routes = [

    {
        path: '',
        component: TabsPage,
        children: [ 
          
            {
                path: 'videofeed',
                loadChildren: () => import('../videofeed/videofeed.module').then( m => m.VideofeedPageModule)
              },
              {
                path: 'customize',
                loadChildren: () => import('../customize/customize.module').then( m => m.CustomizePageModule)
              },
              {
                path: 'picturefeed',
                loadChildren: () => import('../picturefeed/picturefeed.module').then( m => m.PicturefeedPageModule)
              },
              {
                path: 'profile',
                loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
              },
        ]
    }


   
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TabsRoutingModule { }