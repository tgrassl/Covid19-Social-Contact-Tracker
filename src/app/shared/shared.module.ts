import { ReactiveFormsModule } from '@angular/forms';
import { NoteFormComponent } from './components/add-activity/note-form/note-form.component';
import { ContactFormComponent } from './components/add-activity/contact-form/contact-form.component';
import { NoteComponent } from './components/timeline/note/note.component';
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
import { AddActivityComponent } from './components/add-activity/add-activity.component';
import { TransportFormComponent } from './components/add-activity/transport-form/transport-form.component';
import { ActivityFormComponent } from './components/add-activity/activity-form/activity-form.component';

@NgModule({
  declarations: [
    ImageFeedModalComponent,
    LoaderComponent,
    TimelineComponent,
    BottomSheetComponent,
    TravelComponent,
    ChecksComponent,
    ContactComponent,
    ActivityComponent,
    NoteComponent,
    AddActivityComponent,
    TransportFormComponent,
    ContactFormComponent,
    NoteFormComponent,
    ActivityFormComponent,
  ],
  entryComponents: [TimelineComponent],
  imports: [
    CommonModule,
    IonicModule,
    MomentModule,
    ReactiveFormsModule
  ],
  exports: [
    LoaderComponent,
    ImageFeedModalComponent,
    TimelineComponent,
    BottomSheetComponent,
    TravelComponent,
    ChecksComponent,
    ContactComponent,
    ActivityComponent,
    NoteComponent,
    AddActivityComponent,
    TransportFormComponent,
    ContactFormComponent,
    NoteFormComponent,
    ActivityFormComponent,
  ],
  providers: [StatusBar]
})
export class SharedModule { }
