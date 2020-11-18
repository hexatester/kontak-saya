import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TentangComponent } from './tentang/tentang.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'kontak',
    loadChildren: () =>
      import('./kontak/kontak.module').then((m) => m.KontakModule),
  },
  {
    path: 'orang',
    loadChildren: () =>
      import('./orang/orang.module').then((m) => m.OrangModule),
  },
  {
    path: 'tentang',
    component: TentangComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
