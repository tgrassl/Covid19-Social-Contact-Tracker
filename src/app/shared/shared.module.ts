import { DiseaseComponent } from './components/timeline/disease/disease.component';
import { SMS } from '@ionic-native/sms/ngx';
import { DiseaseCheckComponent } from './components/disease-check/disease-check.component';
import { CoreModule } from './../core/core.module';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { PreventDoubleClickDirective } from './directives/prevent-double-click.directive';
import { TranslateModule } from '@ngx-translate/core';

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
    DiseaseCheckComponent,
    DiseaseComponent,
    PreventDoubleClickDirective
  ],
  entryComponents: [TimelineComponent, ContactSelectComponent, DiseaseCheckComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    IonicModule,
    MomentModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    TranslateModule
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
    ContactSelectComponent,
    DiseaseCheckComponent,
    DiseaseComponent,
    TranslateModule
  ],
  providers: [StatusBar, SMS]
})
export class SharedModule { }
