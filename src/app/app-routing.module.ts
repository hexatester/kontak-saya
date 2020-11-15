import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TentangComponent } from './tentang/tentang.component';

const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
