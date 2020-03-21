import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TimelineEvent, TimelineEventType, TransportType } from '../models/timeline-event';
import { MedicalStatus } from './../models/medical-status';
import { AddTimelineEvent, CheckIn, CheckOut } from './entity.actions';
import * as moment from 'moment';

export interface EntityStateModel {
  timeline: TimelineEvent[];
  medicalStatus?: MedicalStatus;
}

@State<EntityStateModel>({
  name: 'Entity',
  defaults: {
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
            phoneNumber: '300202',
            shortName: 'Alex',
            image: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg'
          },
          {
            phoneNumber: '300202',
            shortName: 'Anna',
            image: 'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e'
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
    ]
  }
})
export class EntityState {

  constructor() {}

  @Selector()
  static timeline(state: EntityStateModel): TimelineEvent[] {
    return state.timeline;
  }

  @Selector()
  static medicalStatus(state: EntityStateModel): MedicalStatus {
    return state.medicalStatus;
  }

  @Action(AddTimelineEvent)
  addTimelineEvent(ctx: StateContext<EntityStateModel>, action: AddTimelineEvent) {
    const state = ctx.getState();
    const timeline = [...state.timeline];
    const newTimeline = [...timeline, action.event];
    ctx.patchState({timeline: newTimeline});
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
