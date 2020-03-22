import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IntroPageRoutingModule } from './intro-routing.module';
import { IntroPage } from './intro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroPageRoutingModule
  ],
  declarations: [IntroPage],
  providers: [AndroidPermissions, StatusBar]
})
export class IntroPageModule { }
