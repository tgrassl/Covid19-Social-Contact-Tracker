import { TimelineEvent, TimelineEventType } from 'src/app/core/models/timeline-event';
import { Store } from '@ngxs/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss'],
})
export class ActivityFormComponent implements OnInit {

  @Output() submitted: EventEmitter<TimelineEvent> = new EventEmitter<TimelineEvent>();

  public activityFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.activityFormGroup = new FormGroup({
      content: new FormControl('', Validators.required),
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required),
      indirectContacts: new FormControl('', Validators.required),
      directContacts: new FormControl('', Validators.required),
    });
  }

  public submitForm(): void {
    if (this.activityFormGroup.valid) {
      const newEvent = this.activityFormGroup.value as TimelineEvent;
      newEvent.type = TimelineEventType.activity;
      newEvent.timestamp = moment();
      newEvent.from = moment(newEvent.from).format('HH:mm');
      newEvent.to = moment(newEvent.to).format('HH:mm');
      this.submitted.emit(newEvent);
    }
  }
}
