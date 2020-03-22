import { Moment } from 'moment';

export interface MedicalStatus {
    diseaseType: DiseaseType;
    visitedDoctor: boolean;
    timeFirstSymptoms: Moment;
    notifiedContacts: boolean;
}

export enum DiseaseType {
    covid19 = 'Covid-19',
    influenza = 'Influenza (Grippe)',
    other = 'Andere'
}
