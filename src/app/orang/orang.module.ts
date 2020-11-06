import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrangRoutingModule } from './orang-routing.module';
import { OrangListComponent } from './orang-list/orang-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { OrangFormComponent } from './orang-form/orang-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

const material = [
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
];

@NgModule({
  declarations: [OrangListComponent, OrangFormComponent],
  imports: [CommonModule, OrangRoutingModule, ...material, ReactiveFormsModule],
})
export class OrangModule {}
