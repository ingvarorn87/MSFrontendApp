import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideofeedPage } from './videofeed.page';

describe('VideofeedPage', () => {
  let component: VideofeedPage;
  let fixture: ComponentFixture<VideofeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideofeedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideofeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
