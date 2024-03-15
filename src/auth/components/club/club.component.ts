import { Component, inject } from '@angular/core';
import { Club } from 'src/Interfaces/club';
import { ClubService } from './club.service';

@Component({
  selector: 'mg-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent {
  private readonly clubService = inject(ClubService)

  clubs: Club[] = [];
  getClubs() {
    this.clubService.getClubs()
  }
  
}
