import { Component } from '@angular/core';
import { Registration } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { UserRegistrationService } from '../services/user-registration.service';
import { CityMasterService } from '../services/city-master.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  public userDetailModel: Registration = new Registration();
  cityList: string[] = [];

  constructor(
    private userService: UserRegistrationService,
    private cityMasterService: CityMasterService
  ) {}

  onSubmit(userForm: NgForm) {
    // if (userForm.status === 'VALID') {
    //   console.log('user registration detail', this.userDetailModel);
    // }

    //this.userService.setUser(userForm.value);
    this.userDetailModel.Age = +this.userDetailModel.Age;

    userForm.value.age = +userForm.value.age;

    this.userService.createUser(userForm.value).subscribe({
      next: (data) => console.log('API Called, and Return Value', data),
    });
  }

  ngOnInit() {
    this.bindCityList();
  }

  bindCityList() {
    this.cityMasterService.getCities().subscribe(
      (data: any) => {
        this.cityList = data.map((x: any) => x.name);
        console.log('API Data', data);
      },

      (error) => console.log('Error Happend', error),
      () => console.log('It always run')
    );
  }
}
