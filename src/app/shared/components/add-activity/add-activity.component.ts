import { DiseaseCheckComponent } from './../disease-check/disease-check.component';
import { ModalController } from '@ionic/angular';
import { animate } from '@angular/animations';
import { TimelineEvent, TimelineEventType } from 'src/app/core/models/timeline-event';
import { AddTimelineEvent } from './../../../core/+state/entity.actions';
import { Store } from '@ngxs/store';
import { BottomSheetComponent } from './../bottom-sheet/bottom-sheet.component';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddActivityComponent {
  @ViewChild('bottomSheet', {static: false}) bottomSheet: BottomSheetComponent;

  public selectedTab = 'activity';
  public addActivityTabs = {
    activity: 'activity',
    note: 'note',
    transport: 'transport',
    contact: 'contact',
  };

  public openBottomSheet() {
    this.bottomSheet.open();
  }

  constructor(private store: Store, private modalCtrl: ModalController) { }

  public selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  public handleSubmit(event: TimelineEvent): void {
    this.store.dispatch(new AddTimelineEvent(event));
    this.selectedTab = this.addActivityTabs.activity;
    this.bottomSheet.close();
  }

  public getSelectedColor(): string {
    return 'sheet-tab--' + this.selectedTab;
  }

  public handleSheetClosed(): void {
    this.selectedTab = this.addActivityTabs.activity;
  }

  public diseaseDetected(): void {
    this.selectedTab = this.addActivityTabs.activity;
    this.bottomSheet.close();
    this.showDiseaseCheck();
  }

  async showDiseaseCheck() {
    const modal = await this.modalCtrl.create({
      component: DiseaseCheckComponent,
      cssClass: 'disease-modal'
    });
    modal.onWillDismiss().then(event => {
      
    });
    return await modal.present();
  }

  public checkIn(): void {
    this.checkInOrOut(TimelineEventType.checkIn);
  }

  public checkOut() {
    this.checkInOrOut(TimelineEventType.checkOut);
  }

  private checkInOrOut(type: TimelineEventType): void {
    const checkEvent: TimelineEvent = {
      timestamp: moment(),
      type
    };

    this.handleSubmit(checkEvent);
  }
}
