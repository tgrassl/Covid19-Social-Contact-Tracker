import { Component, OnInit, Input } from '@angular/core';
import { TimelineEvent } from 'src/app/core/models/timeline-event';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {

  @Input() event: TimelineEvent;

  constructor() { }

}
