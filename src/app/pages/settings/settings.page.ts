import { SetGeneralLang } from './../../+state/app.actions';
import { Store } from '@ngxs/store';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { ILocalNotification, LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  private notification: ILocalNotification = {
    id: 1,
    title: 'Heute schon getrackt?',
    text: 'Vergiss nicht deine sozialen Kontakte oder Aktivitäten zu erfassen 🙌',
    vibrate: true,
    led: '#3399ff',
    priority: 2,
    trigger: {
      every: {
        hour: 18,
        minute: 0
      },
      count: 1,
    }
  };

  private langMap = {
    en: 'English (EN)',
    de: 'Deutsch (DE)'
  };

  public notificationsEnabled = false;

  constructor(
    private localNotifications: LocalNotifications, 
    private store: Store,
    public translate: TranslateService) { }

  ngOnInit() {
    this.checkIfNotificationsEnabled();
  }

  public checkIfNotificationsEnabled() {
    this.localNotifications.getAll().then((notifications: ILocalNotification[]) => {
      const found = notifications.find(notification => notification.id === this.notification.id);

      if (found) {
        this.notificationsEnabled = true;
      }
    });
  }

  public handleNotificationSetting(event): void {
    this.notificationsEnabled = event.detail.checked;
    this.scheduleNotification(this.notificationsEnabled);
  }

  public scheduleNotification(enabled: boolean): void {

    if (enabled) {
      this.localNotifications.schedule(this.notification);
    } else {
      this.localNotifications.cancel(this.notification.id);
    }
  }

  public getLanguages(): string[] {
    return this.translate.getLangs();
  }

  public handleLanguageSelected(event): void {
    this.translate.use(event.detail.value);
    this.store.dispatch(new SetGeneralLang());
  }

  public getFormattedLang(lang: string): string {
    return this.langMap[lang];
  }
}
