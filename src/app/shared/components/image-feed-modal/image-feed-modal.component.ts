import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-image-feed-modal',
  templateUrl: './image-feed-modal.component.html',
  styleUrls: ['./image-feed-modal.component.scss'],
})
export class ImageFeedModalComponent implements OnInit {

  @Input()
  images: string[];

  public slideOpts = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 60,
    zoom: {
      toggle: false,
    },
  };

  constructor(private modalController: ModalController,
              private statusBar: StatusBar) {}

  ngOnInit() {
    this.statusBar.styleBlackTranslucent();
    this.statusBar.backgroundColorByHexString('#E6000000');
  }

  async closeImageFeed() {
    await this.modalController.dismiss();

    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFFFFF');
  }

  public openPostDetails() {
    console.log('opening details...');
    this.closeImageFeed();
  }
}

