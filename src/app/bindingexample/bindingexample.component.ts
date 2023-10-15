import { Component } from '@angular/core';

@Component({
  selector: 'app-bindingexample',
  templateUrl: './bindingexample.component.html',
  styleUrls: ['./bindingexample.component.css'],
})
export class BindingExampleComponent {
  firstName: string = 'Rajnikanth';
  spanMyWorld: string = 'spanMyWorld';

  fullAddress: string = '';

  onButtonClick() {
    this.spanMyWorld = 'spanMyGreenWorld';
  }
}
