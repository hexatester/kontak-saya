import { AfterViewInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { merge, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { hapusOrang } from 'src/app/actions/orang';
import { Orang } from 'src/app/models/orang';
import { State } from 'src/app/reducers';
import { OrangService } from '../orang.service';

@Component({
  selector: 'app-orang-list',
  templateUrl: './orang-list.component.html',
  styleUrls: ['./orang-list.component.scss'],
})
export class OrangListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Orang>;
  orangs$: Observable<Array<Orang>>;

  constructor(private store: Store<State>, private service: OrangService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nama', 'actions'];

  ngOnInit() {
    this.orangs$ = this.store.select((state) => state.orang.list);
  }

  ngAfterViewInit(): void {
    this.service.paginator = this.paginator;
    this.service.sort = this.sort;
    this.table.dataSource = this.service;
  }

  delete(id: string): void {
    this.store.dispatch(hapusOrang({ id }));
  }
}
