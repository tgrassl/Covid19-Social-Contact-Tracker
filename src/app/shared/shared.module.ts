import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { MomentModule } from 'ngx-moment';
import { ActivityFormComponent } from './components/add-activity/activity-form/activity-form.component';
import { AddActivityComponent } from './components/add-activity/add-activity.component';
import { ContactFormComponent } from './components/add-activity/contact-form/contact-form.component';
import { NoteFormComponent } from './components/add-activity/note-form/note-form.component';
import { TransportFormComponent } from './components/add-activity/transport-form/transport-form.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { ContactSelectComponent } from './components/contact-select/contact-select.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ActivityComponent } from './components/timeline/activity/activity.component';
import { ChecksComponent } from './components/timeline/checks/checks.component';
import { ContactComponent } from './components/timeline/contact/contact.component';
import { NoteComponent } from './components/timeline/note/note.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TravelComponent } from './components/timeline/travel/travel.component';

@NgModule({
  declarations: [
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
    ContactSelectComponent,
  ],
  entryComponents: [TimelineComponent, ContactSelectComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    IonicModule,
    MomentModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
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
    ContactSelectComponent
  ],
  providers: [StatusBar]
})
export class SharedModule { }
