import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BindingExampleComponent } from './bindingexample/bindingexample.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { component: HomeComponent, path: 'home' },
  { component: AboutusComponent, path: 'aboutus' },
  { component: BindingExampleComponent, path: 'bindingexample' },
  { component: UserRegistrationComponent, path: 'user-registration/:id' },
  { component: UserListComponent, path: 'user-list' },
  { component: UserDetailComponent, path: 'user-detail/:id' },
  { component: HomeComponent, path: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
