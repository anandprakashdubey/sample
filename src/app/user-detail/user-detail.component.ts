import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserRegistrationService } from '../services/user-registration.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent {
  userId: number = 0;
  userData: any;
  constructor(
    private route: ActivatedRoute,
    private userService: UserRegistrationService
  ) {}

  ngOnInit() {
    const _userId = this.route.snapshot.paramMap.get('id');

    if (_userId != '') {
      this.userId = _userId ? +_userId : 0;
    }

    this.getUserById();
  }

  getUserById() {
    this.userService.getUserById(this.userId).subscribe({
      next: (data) => (this.userData = data),
    });
  }
}
