import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivityPageModule } from './activity/activity.module';
import { SettingsPageModule } from './settings/settings.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ActivityPageModule,
    SettingsPageModule,
  ]
})
export class PagesModule { }
