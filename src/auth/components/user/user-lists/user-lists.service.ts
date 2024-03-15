import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserListsService {

  constructor(private fireStore: AngularFirestore) {}

  getUsers() {
    return this.fireStore.collection("users").snapshotChanges();
  }

}
