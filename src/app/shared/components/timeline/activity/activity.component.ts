import { Component, OnInit, Input } from '@angular/core';
import { TimelineEvent } from 'src/app/core/models/timeline-event';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  @Input() event: TimelineEvent;
  
  constructor() { }

  ngOnInit() {}

}
