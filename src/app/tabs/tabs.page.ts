import { Component, ViewChild } from '@angular/core';
import { BottomSheetComponent } from '../shared/components/bottom-sheet/bottom-sheet.component';
import { AddActivityComponent } from '../shared/components/add-activity/add-activity.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  @ViewChild('addActivity', {static: false}) addActivitySheet: AddActivityComponent;

  constructor() {}

}
