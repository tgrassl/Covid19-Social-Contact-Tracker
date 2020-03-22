import { Component, OnInit, Input } from '@angular/core';
import { TimelineEvent } from 'src/app/core/models/timeline-event';
import { DiseaseType } from 'src/app/core/models/medical-status';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.scss'],
})
export class DiseaseComponent {
  @Input() event: TimelineEvent;
  
  constructor() { }

  public getDiseaseTypeName(): string {
    const diseaseType = this.event.medicalStatus.diseaseType;
    return (diseaseType === DiseaseType.other) ? 'Krankheit' : diseaseType;
  }

}
