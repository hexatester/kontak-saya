import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { merge, Observable } from 'rxjs';
import { State } from '../reducers';
import { Kontak } from '../models/kontak';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class KontakService extends DataSource<Kontak> {
  kontaks$: Observable<Array<Kontak>>;
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private store: Store<State>) {
    super();
    this.kontaks$ = store.select((state) => state.kontak.list);
  }

  connect(): Observable<Array<Kontak>> {
    const dataMutations = [
      this.kontaks$,
      this.paginator?.page,
      this.sort?.sortChange,
    ];
    return merge(...dataMutations).pipe(
      map(() => {
        let kontaks: Kontak[];
        this.kontaks$.pipe(take(1)).subscribe((k) => (kontaks = k));
        return this.getPagedData(this.getSortedData([...kontaks]));
      })
    );
  }

  disconnect(): void {}

  private getPagedData(data: Array<Kontak>) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: Array<Kontak>) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nama':
          return compare(a.nama, b.nama, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
