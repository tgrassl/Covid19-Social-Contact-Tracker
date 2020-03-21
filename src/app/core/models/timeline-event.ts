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
}

export enum TimelineEventType {
    checkIn = 'checkIn',
    checkOut = 'checkOut',
    travel = 'travel',
    contact = 'contact',
    note = 'note',
    activity = 'activity',
}

export enum TransportType {
    bus = 'Bus',
    train = 'Zug',
    car = 'Auto'
}
