import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TimelineEvent, TimelineEventType, TransportType } from '../models/timeline-event';
import { MedicalStatus } from './../models/medical-status';
import { AddTimelineEvent, CheckIn, CheckOut, SetMedicalStatus, CompleteIntro, RemoveDirectContact } from './entity.actions';
import * as moment from 'moment';
import { PhoneContact } from '../models/phone-contact.model';

export interface EntityStateModel {
  timeline: TimelineEvent[];
  medicalStatus: MedicalStatus[];
  directContacts?: PhoneContact[];
  indirectContacts?: number;
  introCompleted: boolean;
}

@State<EntityStateModel>({
  name: 'Entity',
  defaults: {
    introCompleted: false,
    indirectContacts: 0,
    medicalStatus: [],
    directContacts: [],
    timeline: []
  }
})
export class EntityState {

  constructor() { }

  @Selector()
  static timeline(state: EntityStateModel): TimelineEvent[] {
    return state.timeline;
  }

  @Selector()
  static medicalStatus(state: EntityStateModel): MedicalStatus[] {
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

  @Selector()
  static introCompleted(state: EntityStateModel): boolean {
    return state.introCompleted;
  }


  @Action(AddTimelineEvent, {cancelUncompleted: true})
  addTimelineEvent(ctx: StateContext<EntityStateModel>, action: AddTimelineEvent) {
    const state = ctx.getState();
    const timeline = [...state.timeline];
    const newTimeline = [...timeline, action.event];
    ctx.patchState({ timeline: newTimeline });

    if (action.event.contacts) {
      const newDirectContacts = [...state.directContacts, ...action.event.contacts];
      const filteredDirectContacts = newDirectContacts.filter((contact: PhoneContact, index, self) =>
        index === self.findIndex((c: PhoneContact) => (
          c.displayName === contact.displayName || c.id === contact.id
        ))
      );
      ctx.patchState({ directContacts: filteredDirectContacts });
    }

    if (action.event.indirectContacts) {
      const newInDirectContacts = state.indirectContacts + action.event.indirectContacts;
      ctx.patchState({ indirectContacts: newInDirectContacts });
    }
  }

  @Action(CheckIn, {cancelUncompleted: true})
  checkIn(ctx: StateContext<EntityStateModel>) {
    const checkInEvent: TimelineEvent = {
      type: TimelineEventType.checkIn,
      timestamp: moment(),
    };

    ctx.dispatch(new AddTimelineEvent(checkInEvent));
  }

  @Action(CheckOut, {cancelUncompleted: true})
  checkOut(ctx: StateContext<EntityStateModel>) {
    const checkOutEvent: TimelineEvent = {
      type: TimelineEventType.checkOut,
      timestamp: moment(),
    };

    ctx.dispatch(new AddTimelineEvent(checkOutEvent));
  }

  @Action(SetMedicalStatus, {cancelUncompleted: true})
  setMedicalStatus(ctx: StateContext<EntityStateModel>, action: SetMedicalStatus) {
    const state = ctx.getState();
    const medicalStatus = state.medicalStatus;
    const newMedicalStatus = [...medicalStatus, action.status];
    ctx.patchState({ medicalStatus: newMedicalStatus });
  }

  @Action(CompleteIntro, {cancelUncompleted: true})
  CompleteIntro(ctx: StateContext<EntityStateModel>) {
    ctx.patchState({ introCompleted: true });
  }

  @Action(RemoveDirectContact, {cancelUncompleted: true})
  removeDirectContact(ctx: StateContext<EntityStateModel>, action: RemoveDirectContact) {
    const state = ctx.getState();
    const directContacts = state.directContacts;
    const newDirectContacts = directContacts.filter(contact => contact.id !== action.contact.id);
    ctx.patchState({ directContacts: newDirectContacts });
  }
}
