import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { SlideUpToggleAnimation } from './slide-up.animation';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
  animations: [SlideUpToggleAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomSheetComponent implements OnInit {

  flags: any = {
    isBottomSheetEnabled: false
  };

  @Input() title: string;

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    
  }

  open() {
    this.flags.isBottomSheetEnabled = true;
    this.changeDetector.detectChanges();
  }

  close() {
    this.flags.isBottomSheetEnabled = false;
    this.changeDetector.detectChanges();
  }

  toggle() {
    this.flags.isBottomSheetEnabled = !this.flags.isBottomSheetEnabled;
    this.changeDetector.detectChanges();
  }

  toggleCloseButton() {
    this.flags.isCloseButtonEnabled = !this.flags.isCloseButtonEnabled;
    this.changeDetector.detectChanges();
  }

}
