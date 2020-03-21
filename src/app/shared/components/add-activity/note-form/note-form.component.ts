import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { TimelineEvent, TimelineEventType } from 'src/app/core/models/timeline-event';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
})
export class NoteFormComponent implements OnInit {

  @Output() submitted: EventEmitter<TimelineEvent> = new EventEmitter<TimelineEvent>();

  public noteFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.noteFormGroup = new FormGroup({
      content: new FormControl('', Validators.required),
    });
  }

  public submitForm(): void {
    if (this.noteFormGroup.valid) {
      const newEvent = this.noteFormGroup.value as TimelineEvent;
      newEvent.type = TimelineEventType.note;
      newEvent.timestamp = moment();
      this.submitted.emit(newEvent);
    }
  }
}
