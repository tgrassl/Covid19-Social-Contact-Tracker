import { TimelineEvent } from 'src/app/core/models/timeline-event';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss'],
})
export class TravelComponent {

  @Input() event: TimelineEvent;
  
  constructor() { }
}
