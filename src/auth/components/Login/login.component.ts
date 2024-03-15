import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from 'src/auth/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'mg-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  model: any = {};

  async login() {
    const user = await this.authService.login(this.model.email, this.model.password);
  }
}
