import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/de';
import { Moment } from 'moment';
import { TimelineEvent } from 'src/app/core/models/timeline-event';
import { TimelineEventType } from './../../../core/models/timeline-event';
import { AppState } from 'src/app/+state/app.state';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimelineComponent implements OnInit {

  @Input() timeline: TimelineEvent[];

  private dotColorMap = {
    checkIn: 'blue',
    checkOut: 'grey',
    travel: 'yellow',
    activity: 'green',
    note: 'grey',
    contact: 'orange',
    disease: 'red'
  };

  constructor(private store: Store, private translate: TranslateService) { }

  ngOnInit() {}

  public getDotClass(type: TimelineEventType): string {
    return 'timeline__container--' + this.dotColorMap[type];
  }

  public identity(index, item) {
    return index;
  }

  public isNewDay(timeline: TimelineEvent[], item: TimelineEvent): boolean {
    const itemIndex = timeline.indexOf(item);
    const previousEvent = timeline[itemIndex - 1];

    if (previousEvent) {
      return moment(previousEvent.timestamp).isBefore(moment(item.timestamp), 'day');
    } else {
      return true;
    }
  }

  public getDateFormat(day: Moment): string {
    const generalLang = this.store.selectSnapshot(AppState.lang);
    const isToday = moment(day).isSame(moment(), 'day');
    return isToday ? generalLang.today : moment(day).locale(this.translate.currentLang).format('ll');
  }

  public isCheckIn(type: TimelineEventType): boolean {
    return type === TimelineEventType.checkIn;
  }

  public isCheckOut(type: TimelineEventType): boolean {
    return type === TimelineEventType.checkOut;
  }

  public isActivity(type: TimelineEventType): boolean {
    return type === TimelineEventType.activity;
  }

  public isDisease(type: TimelineEventType): boolean {
    return type === TimelineEventType.disease;
  }

  public isContact(type: TimelineEventType): boolean {
    return type === TimelineEventType.contact;
  }

  public isTravel(type: TimelineEventType): boolean {
    return type === TimelineEventType.travel;
  }

  public isNote(type: TimelineEventType): boolean {
    return type === TimelineEventType.note;
  }
}
