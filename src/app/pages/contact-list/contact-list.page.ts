import { PhoneContact } from './../../core/models/phone-contact.model';
import { RemoveDirectContact } from './../../core/+state/entity.actions';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { EntityState } from 'src/app/core/+state/entity.state';
import { Observable } from 'rxjs';
import { PhoneContact } from 'src/app/core/models/phone-contact.model';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage {

  @Select(EntityState.directContacts) directContacts$: Observable<PhoneContact[]>;
  @Select(EntityState.indirectContacts) indirectContacts$: Observable<number>;

  @ViewChild('contactList', {static: false}) contactList: IonList;
  
  constructor(private store: Store) { }

  public identity(index, item) {
    return index;
  }

  public removeContactFromList(contact: PhoneContact): void {
    this.store.dispatch(new RemoveDirectContact(contact)).toPromise().then(() => {
      this.contactList.closeSlidingItems();
    });
  }
}
