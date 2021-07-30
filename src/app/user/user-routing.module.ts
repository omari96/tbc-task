import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AccountAddComponent } from './account-add/account-add.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user'
  },
  {
    path: 'user',
    component: UserListComponent,
  },
  {
    path: 'user/add',
    component: AddUserComponent,
  },
  {
    path: 'user/detail/:id',
    component: EditUserComponent,
  },
  {
    path: 'user/detail/:id/accountAdd/:id',
    component: AccountAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
