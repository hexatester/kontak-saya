import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { merge, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Orang } from '../models/orang';
import { State } from '../reducers';

@Injectable({
  providedIn: 'root',
})
export class OrangService extends DataSource<Orang> {
  orangs$: Observable<Array<Orang>>;
  paginator: MatPaginator;
  sort: MatSort;
  constructor(private store: Store<State>) {
    super();
    this.orangs$ = store.select((state) => state.orang.list);
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

  disconnect(): void {}

  private getPagedData(data: Array<Orang>) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: Array<Orang>) {
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
