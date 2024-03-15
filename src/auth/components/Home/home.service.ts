import { Injectable, OnInit } from '@angular/core';
import { ClubService } from '../club/club.service';
import { Club } from 'src/Interfaces/club';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private clubServie: ClubService) { }


  getClubs() {
    return this.clubServie.getClubs();
  }
}
