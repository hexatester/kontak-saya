import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { hapusKontak } from 'src/app/actions/kontak';
import { Kontak } from 'src/app/models/kontak';
import { State } from 'src/app/reducers';
import { KontakService } from '../kontak.service';

@Component({
  selector: 'app-kontak-list',
  templateUrl: './kontak-list.component.html',
  styleUrls: ['./kontak-list.component.scss'],
})
export class KontakListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Kontak>;
  kontaks$: Observable<Array<Kontak>>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nama', 'waktu', 'actions'];
  constructor(private service: KontakService, private store: Store<State>) {}

  ngOnInit() {
    this.kontaks$ = this.store.select((state) => state.kontak.list);
  }

  ngAfterViewInit() {
    this.service.paginator = this.paginator;
    this.service.sort = this.sort;
    this.table.dataSource = this.service;
  }

  detele(id: string): void {
    this.store.dispatch(hapusKontak({ id }));
  }
}
