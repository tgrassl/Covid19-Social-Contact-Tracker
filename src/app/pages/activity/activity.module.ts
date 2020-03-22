import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivityPageRoutingModule } from './activity-routing.module';
import { ActivityPage } from './activity.page';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityPageRoutingModule,
    SharedModule
  ],
  declarations: [ActivityPage],
  providers: [StatusBar]
})
export class ActivityPageModule { }
