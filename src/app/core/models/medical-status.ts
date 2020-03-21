import { Moment } from 'moment';

export interface MedicalStatus {
    disease: string;
    visitedDoctor: boolean;
    firstSymptoms: Moment;
    notifiedContacts: boolean;
}
