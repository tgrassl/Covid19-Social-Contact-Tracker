import { Store } from '@ngxs/store';
import { TranslateService } from '@ngx-translate/core';
import { ContactSelectComponent } from './../../contact-select/contact-select.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TimelineEvent, TransportType, TimelineEventType } from 'src/app/core/models/timeline-event';
import { FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import * as moment from 'moment';
import { ModalController } from '@ionic/angular';
import { AppState } from 'src/app/+state/app.state';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {

  @Output() submitted: EventEmitter<TimelineEvent> = new EventEmitter<TimelineEvent>();

  public contactFormGroup: FormGroup;
  public transportTypes = TransportType;
  private contactPlaceholderDefault: string;

  constructor(
    public modalController: ModalController,
    private translate: TranslateService,
    private store: Store) { }

  ngOnInit() {
    this.contactFormGroup = new FormGroup({
      from: new FormControl('', Validators.required),
      contacts: new FormControl('', Validators.required),
    });
    this.translate.get('addActivity.forms.contact.contactPlaceholder').toPromise().then(text => this.contactPlaceholderDefault = text);
  }

  async showContactSelect() {
    const modal = await this.modalController.create({
      component: ContactSelectComponent,
      componentProps: this.contactFormGroup.value.contacts
    });
    modal.onWillDismiss().then(event => {
      this.contactFormGroup.controls.contacts.setValue(event.data.selectedContacts);
    });
    return await modal.present();
  }

  public submitForm(): void {
    if (this.contactFormGroup.valid) {
      const newEvent = this.contactFormGroup.value as TimelineEvent;
      newEvent.type = TimelineEventType.contact;
      newEvent.timestamp = moment();
      newEvent.from = moment(newEvent.from).format('HH:mm');
      this.submitted.emit(newEvent);
      this.contactFormGroup.reset();
    }
  }

  public getContactText(): string {
    const contactFieldValue = this.contactFormGroup.value.contacts;
    return contactFieldValue.length > 0
      ? `${contactFieldValue.length} ${this.getContactTextVariant(contactFieldValue.length)}`
      : this.contactPlaceholderDefault;
  }

  private getContactTextVariant(length): string {
    const generalLang = this.store.selectSnapshot(AppState.lang);
    return length > 1 ? generalLang.plrContact : generalLang.sngContact;
  }
}
