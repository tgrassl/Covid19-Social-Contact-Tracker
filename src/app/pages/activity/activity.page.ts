import { PhoneContact } from './../../core/models/phone-contact.model';
import { Select } from '@ngxs/store';
import { EntityState } from './../../core/+state/entity.state';
import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TimelineEvent } from 'src/app/core/models/timeline-event';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements AfterViewInit, OnDestroy{

  @ViewChild('content', {static: false}) private content: any;

  @Select(EntityState.directContacts) directContacts$: Observable<PhoneContact[]>;
  @Select(EntityState.timeline) timeline$: Observable<TimelineEvent[]>;

  private scrollSub: Subscription;
  
  constructor() { }

  ngAfterViewInit() {
    this.scrollToBottom();
    this.scrollSub = this.timeline$.subscribe(timeline => {
      console.log(timeline);
      this.scrollToBottom();
    });
  }

  ngOnDestroy() {
    this.scrollSub.unsubscribe();
  }
  
  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom(0);
      }
    }, 500);
  }
}
