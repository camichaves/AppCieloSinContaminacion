import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Video360Page } from './video360.page';

describe('Video360Page', () => {
  let component: Video360Page;
  let fixture: ComponentFixture<Video360Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Video360Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Video360Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
