import { Component } from '@angular/core';
import { UserRegistrationService } from '../services/user-registration.service';
import { Registration } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  userList: Registration[] = [];
  onError: boolean = false;

  constructor(private userService: UserRegistrationService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.userList = data;
      },
      error: (er) => (this.onError = true),
    });
  }

  onDelete(user: Registration) {
    this.userService.deleteUser(user.id).subscribe({
      next: (data) => {
        console.log(data);
        if (data.isDeleted) {
          alert('User Delete');
        } else {
          alert('User not delete');
        }

        this.getUsers();
      },
      error: (er) => (this.onError = true),
    });
  }

  onEdit(user: Registration) {}
}
