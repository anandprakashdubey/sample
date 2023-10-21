import { Component } from '@angular/core';
import { UserRegistrationService } from '../services/user-registration.service';

@Component({
  selector: 'app-bindingexample',
  templateUrl: './bindingexample.component.html',
  styleUrls: ['./bindingexample.component.css'],
})
export class BindingExampleComponent {
  firstName: string = 'Rajnikanth';
  spanMyWorld: string = 'spanMyWorld';
  fullAddress: string = '';

  newlyCreateUserObject: any;

  constructor(private userService: UserRegistrationService) {}

  onButtonClick() {
    this.spanMyWorld = 'spanMyGreenWorld';
  }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.newlyCreateUserObject = this.userService.getUser();
  }
}
