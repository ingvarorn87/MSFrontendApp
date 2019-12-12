import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  @ViewChild('tabs', {static: true}) tabs: IonTabs  //This works without the static: true but throws an error that still compiles, have no idea why....

  constructor() { }

  ngOnInit() {
   this.tabs.select('picturefeed')
  }

}
