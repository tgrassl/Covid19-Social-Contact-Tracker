import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChecksComponent } from './checks.component';

describe('ChecksComponent', () => {
  let component: ChecksComponent;
  let fixture: ComponentFixture<ChecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecksComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
