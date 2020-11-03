import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KontakAddComponent } from './kontak-add/kontak-add.component';
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
      {
        path: 'baru',
        component: KontakAddComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KontakRoutingModule {}
