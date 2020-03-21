import {Action, State, StateContext} from '@ngxs/store';
import {SetServerError} from './app.actions';

export interface AppStateModel {
  serverError: boolean;
}

@State<AppStateModel>({
  name: 'App',
  defaults: {
    serverError: false
  }
})
export class AppState {
  @Action(SetServerError)
  setServerError(ctx: StateContext<AppStateModel>, action: SetServerError) {
    ctx.patchState({serverError: action.error});
  }
}
