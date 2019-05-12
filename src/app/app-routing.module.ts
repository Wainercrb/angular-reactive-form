import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFormComponent } from '../components/user-form/user-form.component';
import { HomeComponent } from '../components/home/home.component'

const routes: Routes = [
  { path: 'register-user', component: UserFormComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
