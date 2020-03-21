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
export class AddActivityComponent implements OnInit {
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

  constructor(private store: Store) { }

  ngOnInit() {}

  public selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  public handleSubmit(event: TimelineEvent): void {
    this.store.dispatch(new AddTimelineEvent(event));
    this.bottomSheet.close();
  }

  public diseaseDetected(): void {

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
