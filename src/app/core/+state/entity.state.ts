import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TimelineEvent, TimelineEventType, TransportType } from '../models/timeline-event';
import { MedicalStatus } from './../models/medical-status';
import { AddTimelineEvent, CheckIn, CheckOut } from './entity.actions';
import * as moment from 'moment';
import { PhoneContact } from '../models/phone-contact.model';

export interface EntityStateModel {
  timeline: TimelineEvent[];
  medicalStatus?: MedicalStatus;
  directContacts?: PhoneContact[];
  indirectContacts?: number;
}

@State<EntityStateModel>({
  name: 'Entity',
  defaults: {
    indirectContacts: 0,
    directContacts: [{
      phoneNumbers: null,
      displayName: 'Alex',
      thumbnail: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg'
    }],
    timeline: [
      {
        type: TimelineEventType.travel,
        timestamp: moment('2020-03-02'),
        from: '12:00',
        to: '12:30',
        indirectContacts: 12,
        transportType: TransportType.train
      },
      {
        type: TimelineEventType.checkIn,
        timestamp: moment('2020-03-02T14:00:00')
      },
      {
        type: TimelineEventType.contact,
        timestamp: moment('2020-03-02'),
        from: '16:00',
        directContacts: 2,
        contacts: [
          {
            phoneNumbers: null,
            displayName: 'Alex',
            thumbnail: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg'
          },
          {
            phoneNumbers: null,
            displayName: 'Anna',
            thumbnail: 'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e'
          }
        ]
      },
      {
        type: TimelineEventType.checkOut,
        timestamp: moment('2020-03-03T08:20:00')
      },
      {
        type: TimelineEventType.activity,
        timestamp: moment('2020-03-03T14:00:00'),
        from: '15:40',
        to: '16:60',
        content: 'Rewe Einkauf',
        indirectContacts: 8,
      },
      {
        type: TimelineEventType.note,
        timestamp: moment('2020-03-21T16:20:00'),
        content: 'Noch keine Symptome, fühle mich gut'
      },
    ]
  }
})
export class EntityState {

  constructor() { }

  @Selector()
  static timeline(state: EntityStateModel): TimelineEvent[] {
    return state.timeline;
  }

  @Selector()
  static medicalStatus(state: EntityStateModel): MedicalStatus {
    return state.medicalStatus;
  }

  @Selector()
  static directContacts(state: EntityStateModel): PhoneContact[] {
    return state.directContacts;
  }

  @Selector()
  static indirectContacts(state: EntityStateModel): number {
    return state.indirectContacts;
  }

  @Action(AddTimelineEvent)
  addTimelineEvent(ctx: StateContext<EntityStateModel>, action: AddTimelineEvent) {
    const state = ctx.getState();
    const timeline = [...state.timeline];
    const newTimeline = [...timeline, action.event];
    ctx.patchState({ timeline: newTimeline });

    if (action.event.contacts) {
      const newDirectContacts = [...state.directContacts, ...action.event.contacts];
      ctx.patchState({ directContacts: newDirectContacts });
    }

    if (action.event.indirectContacts) {
      const newInDirectContacts = state.indirectContacts + action.event.indirectContacts;
      ctx.patchState({ indirectContacts: newInDirectContacts });
    }
  }

  @Action(CheckIn)
  checkIn(ctx: StateContext<EntityStateModel>) {
    const checkInEvent: TimelineEvent = {
      type: TimelineEventType.checkIn,
      timestamp: moment(),
    };

    ctx.dispatch(new AddTimelineEvent(checkInEvent));
  }

  @Action(CheckOut)
  checkOut(ctx: StateContext<EntityStateModel>) {
    const checkOutEvent: TimelineEvent = {
      type: TimelineEventType.checkOut,
      timestamp: moment(),
    };

    ctx.dispatch(new AddTimelineEvent(checkOutEvent));
  }
}
