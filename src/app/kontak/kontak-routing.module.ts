import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KontakFormComponent } from './kontak-form/kontak-form.component';
import { KontakListComponent } from './kontak-list/kontak-list.component';

const routes: Routes = [
  {
    path: '',
    component: KontakListComponent,
  },
  {
    path: 'baru',
    component: KontakFormComponent,
  },
  {
    path: ':id',
    component: KontakFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KontakRoutingModule {}
