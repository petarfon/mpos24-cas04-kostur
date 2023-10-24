import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewItemPage } from '../add-new-item/add-new-item.page';
import { UpdateItemPage } from '../update-item/update-item.page';
//import Task from '';

//za rad sa firebase bazom podataka
import { DataService } from '../service/data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  today: number = Date.now();
  tasks: any;
  sub: Subscription = new Subscription;

  constructor(
    public modalCtrl: ModalController,
    private dataService: DataService) 
  { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.sub = this.dataService.getTasks().subscribe((res) => {
    this.tasks = res;
    console.log(this.tasks);
    });
  }

  async deleteTask(task: any) {
    // await this.dataService.deleteTask(task.id); //sa stringom
    await this.dataService.deleteTask(task);
  }

  async goToAddPage() {
    const modal = await this.modalCtrl.create({
      component: AddNewItemPage
    })
    return await modal.present();
  }

  async goToUpdatePage(task: Task) {
    const modal = await this.modalCtrl.create({
      component: UpdateItemPage,
      componentProps: task
    })
    return await modal.present();
  }

}
