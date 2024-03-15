import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Club } from 'src/Interfaces/club';
import { CLUBS } from 'src/data/mock.clubs';

@Injectable({
  providedIn: 'root',
})
export class ClubService implements OnInit{
  constructor(private fireStore: AngularFirestore) {}
  ngOnInit(): void {
  }

  getClubs() {
    return this.fireStore.collection('club').snapshotChanges();
  }
}
