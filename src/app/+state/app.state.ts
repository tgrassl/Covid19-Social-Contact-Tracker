import { AppStateModel } from './app.state';
import { TranslateService } from '@ngx-translate/core';
import { Action, State, StateContext, NgxsOnInit, Selector } from '@ngxs/store';
import { SetServerError, SetGeneralLang } from './app.actions';

export interface AppStateModel {
  serverError: boolean;
  generalLang?: any;
}

@State<AppStateModel>({
  name: 'App',
  defaults: {
    serverError: false
  }
})
export class AppState implements NgxsOnInit {

  @Selector()
  static lang(state: AppStateModel): any {
    return state.generalLang;
  }
  
  constructor(private translate: TranslateService) { }

  ngxsOnInit(ctx?: StateContext<any>) {
    ctx.dispatch(new SetGeneralLang());
  }

  @Action(SetServerError)
  setServerError(ctx: StateContext<AppStateModel>, action: SetServerError) {
    ctx.patchState({ serverError: action.error });
  }

  @Action(SetGeneralLang)
  async setGeneralLang(ctx: StateContext<AppStateModel>) {
    const generalLang = await this.translate.get('general').toPromise();
    ctx.patchState({ generalLang });
  }
}
