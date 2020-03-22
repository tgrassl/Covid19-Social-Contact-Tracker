import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { EntityState } from 'src/app/core/+state/entity.state';
import { Observable } from 'rxjs';
import { PhoneContact } from 'src/app/core/models/phone-contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage {

  @Select(EntityState.directContacts) directContacts$: Observable<PhoneContact[]>;
  @Select(EntityState.indirectContacts) indirectContacts$: Observable<number>;
  
  constructor() { }

  public identity(index, item) {
    return index;
  }

}
