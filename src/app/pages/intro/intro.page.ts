import { Store } from '@ngxs/store';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

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
      reason: 'Wird benötigt um Kontakte auszulesen. Daten werden nur auf dem Gerät gespeichert.',
      name: 'Kontakte',
      permission: this.androidPermissions.PERMISSION.READ_CONTACTS
    }
  ];

  public permissionsGranted: boolean;

  constructor(private router: Router, private store: Store, private androidPermissions: AndroidPermissions) { }

  ngAfterViewInit() {
    this.ionSlides.lockSwipes(true);
  }

  nextSlide() {
    this.ionSlides.isEnd().then(isEnd => {
      if (isEnd) {
        this.checkPermissions().then(() => {
          this.router.navigate(['tabs/activity']);
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
    } catch (error) {
      this.permissionsGranted = false;
      console.log(error);
    }
  }

  prevSlide() {
    this.ionSlides.lockSwipes(false);
    this.ionSlides.slidePrev().then(() => this.ionSlides.lockSwipes(true));
  }
}
