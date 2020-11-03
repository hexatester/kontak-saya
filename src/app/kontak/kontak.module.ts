import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { KontakRoutingModule } from './kontak-routing.module';
import { KontakComponent } from './kontak.component';
import { KontakListComponent } from './kontak-list/kontak-list.component';
import { KontakAddComponent } from './kontak-add/kontak-add.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  MatIconModule,
];

@NgModule({
  declarations: [KontakComponent, KontakListComponent, KontakAddComponent],
  imports: [
    CommonModule,
    KontakRoutingModule,
    ReactiveFormsModule,
    ...materialModules,
  ],
})
export class KontakModule {}
