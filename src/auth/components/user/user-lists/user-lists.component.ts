import { Component, OnInit, inject } from '@angular/core';
import { UserListsService } from './user-lists.service';
import {  map, pipe } from 'rxjs';
import { Timestamp } from 'firebase/firestore';
import { User } from 'src/Interfaces/user';
@Component({
  selector: 'mg-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss'],
})
export class UserListsComponent implements OnInit {
  private readonly userListService = inject(UserListsService);
  users: User[] = []

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.userListService.getUsers().pipe(
      map((data) => {
        return data.map((value: any) => {
          const id = value.payload.doc.id;
          const obj = value.payload.doc.data()
          if (obj.birthday) {
            const birth = obj.birthday as unknown as Timestamp;
            obj.birthday = birth.toDate().toString()    
          }
          return {id, ...obj}

        });
      })
    ).subscribe({
      next: response => this.users = response,
      error: () => alert("Somthing went wrong!"),
    })
  }
}
