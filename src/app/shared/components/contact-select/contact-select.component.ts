import { PhoneContact } from './../../../core/models/phone-contact.model';
import { ModalController, Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-select',
  templateUrl: './contact-select.component.html',
  styleUrls: ['./contact-select.component.scss'],
})
export class ContactSelectComponent implements OnInit {

  public contactsList: PhoneContact[] = [];
  constructor(private modalCtrl: ModalController, private platform: Platform) { }

  ngOnInit() {
    if (this.platform.is('cordova')) {
      (window as any).navigator.contactsPhoneNumbers.list(
        (contacts: PhoneContact[]) => {
          this.contactsList = contacts;
          this.contactsList = this.cleanUpContacts(this.contactsList);
        },
        (error) => {
          console.log(error);
        });
    } else {
      this.contactsList = [{
        id: '1',
        firstName: 'Kate',
        middleName: '',
        lastName: 'Bell',
        displayName: 'Kate Bell',
        thumbnail: null,
        phoneNumbers: [{
          number: '(555) 564-8583',
          normalizedNumber: '(555) 564-8583',
          type: 'MOBILE'
        }, {
          number: '(415) 555-3695',
          normalizedNumber: '(415) 555-3695',
          type: 'OTHER'
        }]
      }, {
        id: '2',
        firstName: 'Daniel',
        middleName: '',
        lastName: 'Higgins',
        displayName: 'Daniel Higgins',
        thumbnail: null,
        phoneNumbers: [{
          number: '555-478-7672',
          normalizedNumber: '555-478-7672',
          type: 'HOME'
        }, {
          number: '(408) 555-5270',
          normalizedNumber: '(408) 555-5270',
          type: 'MOBILE'
        }, {
          number: '(408) 555-3514',
          normalizedNumber: '(408) 555-3514',
          type: 'OTHER'
        }]
      }, {
        id: '3',
        firstName: 'John',
        middleName: 'Paul',
        lastName: 'Appleseed',
        displayName: 'John Paul Appleseed',
        thumbnail: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
        phoneNumbers: [{
          number: '888-555-5512',
          normalizedNumber: '888-555-5512',
          type: 'MOBILE'
        }, {
          number: '888-555-1212',
          normalizedNumber: '888-555-1212',
          type: 'HOME'
        }]
      }];
    }

    this.contactsList = this.cleanUpContacts(this.contactsList);
  }

  public dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true,
      selectedContacts: this.getSelectedContacts()
    });
  }

  private cleanUpContacts(contacts): PhoneContact[] {
    return [...contacts].map(contact => {
      if (!contact.thumbnail) {
        contact.thumbnail = `https://eu.ui-avatars.com/api/?name=${contact.firstName}&background=3399FF&color=fff`;
      }

      if (contact.thumbnail.startsWith('content')) {
        contact.thumbnail = (window as any).Ionic.WebView.convertFileSrc(contact.thumbnail);
      }

      return contact;
    });
  }

  private getSelectedContacts() {
    return this.contactsList.filter((contact: PhoneContact) => contact.isSelected);
  }
}
