import { TimelineEvent } from 'src/app/core/models/timeline-event';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() event: TimelineEvent;
  
  constructor() { }

  public getContactName(): string {
    const firstContact = this.event.contacts[0];
    return firstContact.shortName ? firstContact.shortName : firstContact.firstName + ' ' + firstContact.lastName;
  }

  public getContactAvatars() {
    return this.event.contacts.slice(0, 2);
  }

  public getAdditionalContacts(): number {
    return this.event.contacts.length - 1;
  }

  public getPersonWording(length): string {
    return length > 1 ? 'Personen' : 'Person';
  }
}
