import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TimelineEvent, TimelineEventType } from '../models/timeline-event';
import { MedicalStatus } from './../models/medical-status';
import { AddTimelineEvent, CheckIn, CheckOut } from './entity.actions';
import * as moment from 'moment';

export interface EntityStateModel {
  timeline: TimelineEvent[];
  medicalStatus: MedicalStatus;
}

@State<EntityStateModel>({
  name: 'Entity',
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
