import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KontakListComponent } from './kontak-list/kontak-list.component';

import { KontakComponent } from './kontak.component';

const routes: Routes = [
  {
    path: '',
    component: KontakComponent,
    children: [
      {
        path: '',
        component: KontakListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KontakRoutingModule {}
