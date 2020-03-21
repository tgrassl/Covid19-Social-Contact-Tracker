import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { ImageFeedModalComponent } from './components/image-feed-modal/image-feed-modal.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    ImageFeedModalComponent,
    LoaderComponent,
    TimelineComponent,
    BottomSheetComponent
  ],
  entryComponents: [TimelineComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LoaderComponent,
    ImageFeedModalComponent,
    TimelineComponent,
    BottomSheetComponent
  ],
  providers: [StatusBar]
})
export class SharedModule { }
