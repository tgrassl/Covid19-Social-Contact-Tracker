import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { AppState } from 'src/app/+state/app.state';
import { TimelineEvent } from 'src/app/core/models/timeline-event';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss'],
})
export class TravelComponent {

  @Input() event: TimelineEvent;

  constructor(private store: Store) { }

  public getTransportTypeName(transportType): string {
    const types = this.store.selectSnapshot(AppState.lang).transportTypes;
    return types[transportType];
  }
}
