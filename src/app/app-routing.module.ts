import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth/auth.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/auth/components/Home/home.component';
import { DashboardComponent } from 'src/auth/components/dashboard/dashboard/dashboard.component';
import { UserListsComponent } from 'src/auth/components/user/user-lists/user-lists.component';
import { UserDetailComponent } from 'src/auth/components/user/user-detail/user-detail.component';
import { AddUserComponent } from 'src/auth/components/user/add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',

    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'users',
    component: UserListsComponent
  },
  {
    path: 'user/:id',
    pathMatch: 'full',
    component: UserDetailComponent
  },
  {
    path: 'addUser',
    component: AddUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
