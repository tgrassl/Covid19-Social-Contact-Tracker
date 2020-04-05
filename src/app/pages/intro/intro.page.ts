import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { IonSlides } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { CompleteIntro } from './../../core/+state/entity.actions';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements AfterViewInit {

  @ViewChild('slides', { static: false }) ionSlides: IonSlides;

  public slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: false
  };

  public neededPermissions = [
    {
      langKey: 'contacts',
      permission: this.androidPermissions.PERMISSION.READ_CONTACTS
    },
    {
      langKey: 'sms',
      permission: this.androidPermissions.PERMISSION.SEND_SMS
    }
  ];

  public permissionsGranted: boolean;

  constructor(
    private router: Router,
    private store: Store,
    private androidPermissions: AndroidPermissions,
    private statusBar: StatusBar) { }

  public ngAfterViewInit(): void {
    this.ionSlides.lockSwipes(true);
  }

  ionViewDidEnter() {
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FBFBFB');
  }

  public nextSlide(): void {
    this.ionSlides.isEnd().then(isEnd => {
      if (isEnd) {
        this.checkPermissions().then(() => {
          this.router.navigateByUrl('/tabs/activity');
        });
      } else {
        this.ionSlides.lockSwipes(false);
        this.ionSlides.slideNext().then(() => this.ionSlides.lockSwipes(true));
      }
    });
  }

  async checkPermissions(): Promise<any> {
    const permissions = this.neededPermissions.map(itmem => itmem.permission);
    try {
      await this.androidPermissions.requestPermissions(permissions);
      this.permissionsGranted = true;

      if (this.permissionsGranted) {
        this.store.dispatch(new CompleteIntro());
      }
    } catch (error) {
      this.permissionsGranted = false;
      console.log(error);
    }
  }

  public prevSlide(): void {
    this.ionSlides.lockSwipes(false);
    this.ionSlides.slidePrev().then(() => this.ionSlides.lockSwipes(true));
  }

  public getTranslationPath(langKey: string, subKey: string): string {
    return 'pages.intro.slide3.permissions.' + langKey + '.' + subKey;
  }
}
