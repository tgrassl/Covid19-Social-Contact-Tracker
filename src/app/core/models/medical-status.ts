import { Moment } from 'moment';

export interface MedicalStatus {
    diseaseType: DiseaseType;
    visitedDoctor: boolean;
    timeFirstSymptoms: Moment;
    notifiedContacts: boolean;
}

export enum DiseaseType {
    covid19 = 'covid-19',
    influenza = 'influenza',
    other = 'other'
}
