import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { DiseaseType } from 'src/app/core/models/medical-status';
import { TimelineEvent } from 'src/app/core/models/timeline-event';
import { AppState } from 'src/app/+state/app.state';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.scss'],
})
export class DiseaseComponent {
  @Input() event: TimelineEvent;
  
  constructor(private store: Store) { }

  public getDiseaseTypeName(): string {
    const diseaseType = this.event.medicalStatus.diseaseType;
    const types = this.store.selectSnapshot(AppState.lang).diseaseTypes;
    return (diseaseType === DiseaseType.other) ? types.default : types[diseaseType];
  }

}
