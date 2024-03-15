import { Injectable, inject, ɵsetAlternateWeakRefImpl } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly afAuth = inject(AngularFireAuth);
  private readonly router = inject(Router);

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/dashboard']);
    })
  }

  signup(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // authentication methods
  // logout, password reset
  signOut() {
    localStorage.removeItem('token')
    return this.afAuth.signOut();
  }

  getAuthState() {
    return this.afAuth.authState;
  }
}
