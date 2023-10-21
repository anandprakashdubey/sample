import { Component } from '@angular/core';
import { UserDetail } from '../models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  public userDetailModel: UserDetail = new UserDetail();
  cityList: string[] = ['Bhopal', 'Indore'];

  onSubmit(userForm: NgForm) {
    if (userForm.status === 'VALID') {
      console.log('user registration detail', this.userDetailModel);
    }
  }
}
