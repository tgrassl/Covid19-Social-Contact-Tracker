import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  @ViewChild('content', {static: false}) private content: any;
  
  constructor() { }

  ngOnInit() {
    this.scrollToBottomOnInit();
  }
  
  scrollToBottomOnInit() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom(0);
      }
    }, 500);
  }
}
