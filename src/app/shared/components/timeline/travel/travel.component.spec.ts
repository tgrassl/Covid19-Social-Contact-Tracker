import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelComponent } from './travel.component';

describe('TravelComponent', () => {
  let component: TravelComponent;
  let fixture: ComponentFixture<TravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
