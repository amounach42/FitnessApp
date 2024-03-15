import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Club } from 'src/Interfaces/club';
import { ClubService } from '../club/club.service';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';

@Component({
  selector: 'mg-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [RouterModule, CommonModule],
})
export class HomeComponent implements OnInit {
  private readonly clubService = inject(ClubService);
  private readonly homeService = inject(HomeService);
  clubs: Club[] = [];

  ngOnInit(): void {
    this.getClubs();
  }

  getClubs() {
    this.homeService.getClubs().subscribe({
      next: res => this.clubs = res.map((c: any) => {
        const data = c.payload.doc.data()
        data.id = c.payload.doc.id

        return data;
      })
    })
  }
}
