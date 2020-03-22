import { PhoneContact } from './../../core/models/phone-contact.model';
import { Select } from '@ngxs/store';
import { EntityState } from './../../core/+state/entity.state';
import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TimelineEvent } from 'src/app/core/models/timeline-event';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements AfterViewInit, OnDestroy {

  @ViewChild('content', { static: false }) private content: any;

  @Select(EntityState.directContacts) directContacts$: Observable<PhoneContact[]>;
  @Select(EntityState.timeline) timeline$: Observable<TimelineEvent[]>;

  private scrollSub: Subscription;

  constructor(private statusBar: StatusBar) { }

  public ngAfterViewInit(): void {
    this.scrollToBottom();
    this.scrollSub = this.timeline$.subscribe(timeline => {
      this.scrollToBottom();
    });
  }

  ionViewDidEnter() {
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFC107');
  }

  public ngOnDestroy(): void {
    this.scrollSub.unsubscribe();
  }

  public getInfoText(length: number): string {
    return length > 1 ? 'Aktive Kontakte' : 'Aktiver Kontakt';
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom(200);
      }
    }, 500);
  }
}
