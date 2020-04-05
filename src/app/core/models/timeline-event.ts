import { MedicalStatus } from './medical-status';
import { Moment } from 'moment';
import { PhoneContact } from './phone-contact.model';

export interface TimelineEvent {
    type: TimelineEventType;
    timestamp: Moment;
    from?: string;
    to?: string;
    content?: string;
    directContacts?: number;
    indirectContacts?: number;
    contacts?: PhoneContact[];
    transportType?: TransportType;
    medicalStatus?: MedicalStatus;
}

export enum TimelineEventType {
    checkIn = 'checkIn',
    checkOut = 'checkOut',
    travel = 'travel',
    contact = 'contact',
    note = 'note',
    activity = 'activity',
    disease = 'disease'
}

export enum TransportType {
    bus = 'bus',
    train = 'train',
    car = 'car'
}
