import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Kontak } from 'src/app/models/kontak';
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
  displayedColumns = ['id', 'nama'];
  constructor(private service: KontakService) {}

  ngOnInit() {
    this.kontaks$ = this.service.kontaks$;
  }

  ngAfterViewInit() {
    this.service.sort = this.sort;
    this.service.paginator = this.paginator;
    this.table.dataSource = this.service;
  }
}
