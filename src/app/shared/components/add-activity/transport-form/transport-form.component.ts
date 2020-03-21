import { TransportType } from './../../../../core/models/timeline-event';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { TimelineEvent, TimelineEventType } from 'src/app/core/models/timeline-event';

@Component({
  selector: 'app-transport-form',
  templateUrl: './transport-form.component.html',
  styleUrls: ['./transport-form.component.scss'],
})
export class TransportFormComponent implements OnInit {

  @Output() submitted: EventEmitter<TimelineEvent> = new EventEmitter<TimelineEvent>();

  public transportFormGroup: FormGroup;
  public transportTypes = TransportType;

  constructor() { }

  ngOnInit() {
    this.transportFormGroup = new FormGroup({
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required),
      transportType: new FormControl('', Validators.required),
      indirectContacts: new FormControl('', Validators.required),
    });
  }

  public submitForm(): void {
    if (this.transportFormGroup.valid) {
      const newEvent = this.transportFormGroup.value as TimelineEvent;
      newEvent.type = TimelineEventType.travel;
      newEvent.timestamp = moment();
      newEvent.from = moment(newEvent.from).format('HH:mm');
      newEvent.to = moment(newEvent.to).format('HH:mm');
      this.submitted.emit(newEvent);
    }
  }
}
