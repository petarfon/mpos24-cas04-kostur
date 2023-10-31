import { Injectable } from '@angular/core';

import {
  collection,
  Firestore,
  collectionData,
  doc,
  deleteDoc
} from '@angular/fire/firestore';

//  atributi inferfejsa se moraju poklapati sa poljima u dokumentu Firebase baze podataka
export interface Task {
  id?: number;
  date: string;
  done: boolean;
  name: string;
  category: string;
}


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private firestore: Firestore) { }

  getTasks() {
    const tasksRef = collection(this.firestore, 'tasks');
    return collectionData(tasksRef, { idField: 'id' });
  }

  //sa stringom
  // deleteTask(id: string) {
  //   const taskRef = doc(this.firestore, `tasks/${id}`);
  //   return deleteDoc(taskRef);
  // }

  //sa celim objektom
  deleteTask(task: Task) {
    const taskRef = doc(this.firestore, `tasks/${task.id}`);
    return deleteDoc(taskRef);
  }

}
