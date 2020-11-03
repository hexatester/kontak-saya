import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { KontakRoutingModule } from './kontak-routing.module';
import { KontakComponent } from './kontak.component';
import { KontakListComponent } from './kontak-list/kontak-list.component';

const materialModules = [
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
];

@NgModule({
  declarations: [KontakComponent, KontakListComponent],
  imports: [CommonModule, KontakRoutingModule, ...materialModules],
})
export class KontakModule {}
