import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mg-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  imports: [FormsModule]
})
export class SignupComponent {
  constructor(private authService: AuthService) {} // injecting the authService and router instance 
  private readonly router = inject(Router) 
  model: any = {};

  async signup() {
    const user = await this.authService.signup(this.model.email, this.model.password)
    if (user) this.router.navigate(['/home'])
  }
}
