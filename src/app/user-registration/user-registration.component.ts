import { Component } from '@angular/core';
import { Registration } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { UserRegistrationService } from '../services/user-registration.service';
import { CityMasterService } from '../services/city-master.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  public userDetailModel: Registration = new Registration();
  userId: number = 0;
  cityList: string[] = [];

  constructor(
    private userService: UserRegistrationService,
    private cityMasterService: CityMasterService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onSubmit(userForm: NgForm) {
    // if (userForm.status === 'VALID') {
    //   console.log('user registration detail', this.userDetailModel);
    // }

    //this.userService.setUser(userForm.value);
    this.userDetailModel.age = +this.userDetailModel.age;

    userForm.value.age = +userForm.value.age;

    if (this.userDetailModel.id > 0) {
      this.userService.updateUser(this.userDetailModel).subscribe({
        next: (data) => {
          console.log('API Called, and Return Value', data);

          this.router.navigate(['./user-list']);
        },
      });
    } else {
      this.userService.createUser(userForm.value).subscribe({
        next: (data) => {
          console.log('API Called, and Return Value', data);

          this.router.navigate(['./user-list']);
        },
      });
    }
  }

  ngOnInit() {
    this.bindCityList();

    const _userId = this.route.snapshot.paramMap.get('id');

    if (_userId != '') {
      this.userId = _userId ? +_userId : 0;
    }

    this.getUserById();
  }

  getUserById() {
    this.userService.getUserById(this.userId).subscribe({
      next: (data) => (this.userDetailModel = data),
    });
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
