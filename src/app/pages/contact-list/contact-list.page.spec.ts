import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactListPage } from './contact-list.page';

describe('ContactListPage', () => {
  let component: ContactListPage;
  let fixture: ComponentFixture<ContactListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
