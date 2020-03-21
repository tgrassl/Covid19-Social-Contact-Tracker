import { ContactSelectComponent } from './../../contact-select/contact-select.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TimelineEvent, TransportType, TimelineEventType } from 'src/app/core/models/timeline-event';
import { FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import * as moment from 'moment';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {

  @Output() submitted: EventEmitter<TimelineEvent> = new EventEmitter<TimelineEvent>();

  public contactFormGroup: FormGroup;
  public transportTypes = TransportType;

  constructor(public modalController: ModalController) {}

  ngOnInit() {
    this.contactFormGroup = new FormGroup({
      from: new FormControl('', Validators.required),
      contacts: new FormControl('', Validators.required),
    });
  }

  async showContactSelect() {
    const modal = await this.modalController.create({
      component: ContactSelectComponent
    });
    modal.onWillDismiss().then(event => {
      console.log(event.data);
      this.contactFormGroup.controls.contacts.setValue(event.data.selectedContacts);
    });
    return await modal.present();
  }
  
  public submitForm(): void {
    if (this.contactFormGroup.valid) {
      const newEvent = this.contactFormGroup.value as TimelineEvent;
      newEvent.type = TimelineEventType.travel;
      newEvent.timestamp = moment();
      newEvent.from = moment(newEvent.from).format('HH:mm');
      newEvent.to = moment(newEvent.to).format('HH:mm');
      this.submitted.emit(newEvent);
    }
  }
}
