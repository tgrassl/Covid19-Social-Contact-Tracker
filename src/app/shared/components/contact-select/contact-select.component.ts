import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-select',
  templateUrl: './contact-select.component.html',
  styleUrls: ['./contact-select.component.scss'],
})
export class ContactSelectComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  public dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  public getContacts() {
    return [
      { val: 'Pepperoni', isChecked: true, img: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg' },
      { val: 'Sausage', isChecked: false },
      { val: 'Mushroom', isChecked: false }
    ];
  }

}
