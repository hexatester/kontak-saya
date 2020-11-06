import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrangFormComponent } from './orang-form/orang-form.component';
import { OrangListComponent } from './orang-list/orang-list.component';

const routes: Routes = [
  {
    path: '',
    component: OrangListComponent,
  },
  {
    path: 'baru',
    component: OrangFormComponent,
  },
  {
    path: ':id',
    component: OrangFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrangRoutingModule {}
