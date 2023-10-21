import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BindingExampleComponent } from './bindingexample/bindingexample.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  { component: HomeComponent, path: 'home' },
  { component: AboutusComponent, path: 'aboutus' },
  { component: BindingExampleComponent, path: 'bindingexample' },
  { component: UserRegistrationComponent, path: 'user-registration' },
  { component: HomeComponent, path: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
