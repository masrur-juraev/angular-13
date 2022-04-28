import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];
  constructor(public restApi: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    return this.restApi.getUsers().subscribe((data: {}) => {
      this.users = data;
    });
  }

  onEditUser(user: any) {
    this.router.navigateByUrl('/user-edit', { state: { ...user } });
  }
}
