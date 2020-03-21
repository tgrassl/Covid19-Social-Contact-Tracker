import { BottomSheetComponent } from './../bottom-sheet/bottom-sheet.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss'],
})
export class AddActivityComponent implements OnInit {
  @ViewChild('bottomSheet', {static: false}) bottomSheet: BottomSheetComponent;

  public selectedTab = 'activity';
  public addActivityTabs = {
    activity: 'activity',
    note: 'note',
    transport: 'transport',
    contact: 'contact',
  };

  public openBottomSheet() {
    this.bottomSheet.open();
  }

  constructor() { }

  ngOnInit() {}

  public selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
