import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PicturefeedPage } from './picturefeed.page';

describe('PicturefeedPage', () => {
  let component: PicturefeedPage;
  let fixture: ComponentFixture<PicturefeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicturefeedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PicturefeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
