import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shell/not-found/not-found.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },

  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
