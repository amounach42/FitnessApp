import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/auth/auth.service';

@Component({
  selector: 'mg-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  signOut() {
    this.authService.signOut();
  }
}
