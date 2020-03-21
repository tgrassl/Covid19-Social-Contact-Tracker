import { ContactComponent } from './components/timeline/contact/contact.component';
import { ChecksComponent } from './components/timeline/checks/checks.component';
import { TravelComponent } from './components/timeline/travel/travel.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { ImageFeedModalComponent } from './components/image-feed-modal/image-feed-modal.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ActivityComponent } from './components/timeline/activity/activity.component';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    ImageFeedModalComponent,
    LoaderComponent,
    TimelineComponent,
    BottomSheetComponent,
    TravelComponent,
    ChecksComponent,
    ContactComponent,
    ActivityComponent
  ],
  entryComponents: [TimelineComponent],
  imports: [
    CommonModule,
    IonicModule,
    MomentModule,
  ],
  exports: [
    LoaderComponent,
    ImageFeedModalComponent,
    TimelineComponent,
    BottomSheetComponent,
    TravelComponent,
    ChecksComponent,
    ContactComponent,
    ActivityComponent
  ],
  providers: [StatusBar]
})
export class SharedModule { }
