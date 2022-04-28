import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {UserEditComponent} from "./components/user-edit/user-edit.component";

const routes: Routes = [
  { path: '', component: UsersComponent, pathMatch: 'full'},
  { path: 'user-edit', component: UserEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
