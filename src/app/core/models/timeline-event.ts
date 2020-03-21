import {Moment} from 'moment';

export interface TimelineEvent {
    type: TimelineEventType;
    timestamp: Moment;
    from?: Moment;
    to?: Moment;
    content?: string;
    directContacts?: number;
    indirectContacts?: number;
}

export enum TimelineEventType {
    checkIn = 'checkIn',
    checkOut = 'checkOut',
    travel = 'travel',
    contact = 'contact',
    note = 'note',
    activity = 'activity',
}
