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

  connect(): Observable<Array<Orang>> {
    const dataMutations = [
      this.orangs$,
      this.paginator.page,
      this.sort.sortChange,
    ];
    return merge(...dataMutations).pipe(
      map(() => {
        let orangs: Orang[];
        this.orangs$.pipe(take(1)).subscribe((o) => (orangs = o));
        return this.getPagedData(this.getSortedData([...orangs]));
      })
    );
  }

  private getPagedData(data: Orang[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }
  private getSortedData(data: Orang[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name':
          return compare(a.nama, b.nama, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        default:
          return 0;
      }
    });
  }

  delete(id: string): void {
    this.store.dispatch(hapusOrang({ id }));
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
