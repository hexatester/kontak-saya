import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { KontakRoutingModule } from './kontak-routing.module';
import { KontakListComponent } from './kontak-list/kontak-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { KontakFormComponent } from './kontak-form/kontak-form.component';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';

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
  MatDatepickerModule,
  NgxMatNativeDateModule,
  NgxMatDatetimePickerModule,
];

@NgModule({
  declarations: [KontakListComponent, KontakFormComponent],
  imports: [
    CommonModule,
    KontakRoutingModule,
    ReactiveFormsModule,
    ...materialModules,
  ],
})
export class KontakModule {}
