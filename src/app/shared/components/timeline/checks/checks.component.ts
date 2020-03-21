import { Component, OnInit, Input } from '@angular/core';
import { TimelineEvent } from 'src/app/core/models/timeline-event';

@Component({
  selector: 'app-checks',
  templateUrl: './checks.component.html',
  styleUrls: ['./checks.component.scss'],
})
export class ChecksComponent {

  @Input() event: TimelineEvent;
  @Input() checkIn: boolean;
  
  constructor() { }
  
  public getCheckType(): string {
    return this.checkIn ? 'betreten' : 'verlassen';
  }

  public getCheckIcon(): string {
    return this.checkIn ? 'home-sharp' : 'log-out';
  }
}
