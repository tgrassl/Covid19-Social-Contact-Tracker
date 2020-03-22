import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { SlideUpToggleAnimation } from './slide-up.animation';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
  animations: [SlideUpToggleAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomSheetComponent {

  flags: any = {
    isBottomSheetEnabled: false
  };

  @Input() title: string;
  @Output() closed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  open() {
    this.flags.isBottomSheetEnabled = true;
    this.changeDetector.detectChanges();
  }

  close() {
    this.flags.isBottomSheetEnabled = false;
    this.changeDetector.detectChanges();
    this.closed.emit(true);
  }

  toggle() {
    this.flags.isBottomSheetEnabled = !this.flags.isBottomSheetEnabled;
    this.changeDetector.detectChanges();
    this.closed.emit(this.flags.isCloseButtonEnabled);
  }

  toggleCloseButton() {
    this.flags.isCloseButtonEnabled = !this.flags.isCloseButtonEnabled;
    this.changeDetector.detectChanges();
    this.closed.emit(this.flags.isCloseButtonEnabled);
  }

}
