import { Store } from '@ngxs/store';
import { Component, Input } from '@angular/core';
import { TimelineEvent } from 'src/app/core/models/timeline-event';
import { AppState } from 'src/app/+state/app.state';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() event: TimelineEvent;
  
  constructor(private store: Store) { }

  public getContactName(): string {
    const firstContact = this.event.contacts[0];
    return firstContact.displayName ? firstContact.displayName : firstContact.firstName + ' ' + firstContact.lastName;
  }

  public getContactAvatars() {
    return this.event.contacts.slice(0, 2);
  }

  public getAdditionalContacts(): number {
    return this.event.contacts.length - 1;
  }

  public getPersonWording(length): string {
    const generalLang = this.store.selectSnapshot(AppState.lang);
    return length > 1 ? generalLang.plrPerson : generalLang.sngPerson;
  }
}
