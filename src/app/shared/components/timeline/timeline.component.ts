import { Moment } from 'moment';
import { TimelineEventType } from './../../../core/models/timeline-event';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { EntityState } from './../../../core/+state/entity.state';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TimelineEvent } from 'src/app/core/models/timeline-event';
import * as moment from 'moment';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimelineComponent implements OnInit {

  @Select(EntityState.timeline) timeline$: Observable<TimelineEvent[]>;

  private dotColorMap = {
    checkIn: 'blue',
    checkOut: 'grey',
    travel: 'yellow',
    activity: 'green',
    note: 'grey',
    contact: 'orange',
    disease: 'red'
  };

  constructor() { }

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
      return previousEvent.timestamp.isBefore(item.timestamp, 'day');
    } else {
      return true;
    }
  }

  public getDateFormat(day: Moment): string {
    const isToday = moment(day).isSame(moment(), 'day');
    return isToday ? 'Heute' : day.locale('de').format('ll');
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
