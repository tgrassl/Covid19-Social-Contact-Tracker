import { Store } from '@ngxs/store';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { SetGeneralLang } from './+state/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private store: Store,
    private translate: TranslateService
  ) {
    this.initializeApp();
    translate.setDefaultLang('de');
    translate.onLangChange.subscribe(() => {
      this.store.dispatch(new SetGeneralLang());
    });

    const browserLang = translate.getBrowserLang();
    if (browserLang) {
      if (translate.getLangs().includes(browserLang)) {
        translate.use(browserLang);
      } else {
        translate.use('en');
      }
    } else {
      translate.use('de');
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#FBFBFB');
      this.statusBar.show();
      this.splashScreen.hide();
    });
  }
}
