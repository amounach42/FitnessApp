import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/Login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { UserListsComponent } from './components/user/user-lists/user-lists.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, CommonModule],

  exports: [RouterModule],

  declarations: [
    DashboardComponent,
    UserListsComponent,
    UserDetailComponent,
    AddUserComponent,
  ],
})
export class AuthModule {}
