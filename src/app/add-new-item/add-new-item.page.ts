import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.page.html',
  styleUrls: ['./add-new-item.page.scss'],
})

export class AddNewItemPage implements OnInit {



  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }



}
