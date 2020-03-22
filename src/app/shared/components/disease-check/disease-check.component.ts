import { TimelineEvent, TimelineEventType } from 'src/app/core/models/timeline-event';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SMS, SmsOptions } from '@ionic-native/sms/ngx';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { EntityState } from 'src/app/core/+state/entity.state';
import { DiseaseType } from 'src/app/core/models/medical-status';
import { PhoneContact } from 'src/app/core/models/phone-contact.model';
import { SetMedicalStatus, AddTimelineEvent } from './../../../core/+state/entity.actions';
import { MedicalStatus } from './../../../core/models/medical-status';

@Component({
  selector: 'app-disease-check',
  templateUrl: './disease-check.component.html',
  styleUrls: ['./disease-check.component.scss'],
})
export class DiseaseCheckComponent implements OnInit {

  @Select(EntityState.directContacts) directContacts$: Observable<PhoneContact[]>;

  public diseaseFormGroup: FormGroup;
  public diseaseTypes = DiseaseType;
  public monthNames: string[] =
    ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

  private loader: any;

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private loaderCtrl: LoadingController,
    private sms: SMS,
    private store: Store) { }

  ngOnInit() {
    this.diseaseFormGroup = new FormGroup({
      diseaseType: new FormControl('', Validators.required),
      visitedDoctor: new FormControl(false, Validators.required),
      timeFirstSymptoms: new FormControl('', Validators.required),
    });
  }

  public submitForm(notifyContacts: boolean) {
    console.log(this.diseaseFormGroup.value);
    if (this.diseaseFormGroup.valid) {
      const formValue = this.diseaseFormGroup.value;
      const medicalStatus: MedicalStatus = formValue as MedicalStatus;
      const newTimelineEvent: TimelineEvent = {
        timestamp: moment(),
        type: TimelineEventType.disease,
        medicalStatus
      };

      this.store.dispatch(new SetMedicalStatus(medicalStatus));
      this.store.dispatch(new AddTimelineEvent(newTimelineEvent));
      this.dismiss();

      if (notifyContacts) {
        this.notifyAllDirectContacts().then(async (sent: boolean) => {
          if (sent) {
            await this.presentToast('Kontakte wurden informiert!', false);
          }
        });
      }
    }
  }

  public dismiss() {
    this.modalCtrl.dismiss();
  }

  public getInformText(length): string {
    return `${length > 1 ? 'Sollen' : 'Soll'} ${length > 1 ? 'deine' : 'dein'} 
    <b>${length}</b> ${length > 1 ? 'Kontakte' : 'Kontakt'} benachrichtigt werden?`;
  }

  async notifyAllDirectContacts(): Promise<boolean> {
    const message = '';
    const directContacts = this.store.selectSnapshot(EntityState.directContacts);
    const smsOptions: SmsOptions = {
      android: {
        intent: ''
      }
    };

    await this.presentLoader(directContacts.length);

    let totalSendAmount = 0;
    directContacts.forEach(async (contact: PhoneContact) => {
      try {
        const contactNumber = contact.phoneNumbers.find(phoneNumber => phoneNumber.type === 'MOBILE').normalizedNumber;
        await this.sms.send(contactNumber, message, smsOptions);
        totalSendAmount++;
        this.loader.setContent(this.getLoaderStatus(totalSendAmount, directContacts.length));
      } catch {
        await this.dismissLoader();
        await this.presentToast(`Fehler beim Senden an ${contact.displayName}`, true);
        return false;
      }
    });

    return true;
  }

  async presentLoader(totalContacts: number) {
    return await this.loaderCtrl.create({
      message: this.getLoaderStatus(0, totalContacts),
      spinner: 'crescent',
      translucent: true,
      cssClass: 'disease-check-loader',
    }).then(loader => {
      this.loader = loader;
      loader.present();
    });
  }

  async dismissLoader() {
    return await this.loaderCtrl.dismiss();
  }

  private getLoaderStatus(doneAmount: number, total: number): string {
    return `${doneAmount}/${total} Kontakte informiert`;
  }

  async presentToast(message: string, isError: boolean) {
    const toast = await this.toastCtrl.create({
      message,
      color: isError ? 'danger' : 'primary',
      duration: 2000,
      mode: 'ios'
    });
    toast.present();
  }
}
