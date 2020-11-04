import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { editSetting } from '../actions/setting';
import { State } from '../reducers';

@Component({
  selector: 'app-tentang',
  templateUrl: './tentang.component.html',
  styleUrls: ['./tentang.component.scss'],
})
export class TentangComponent implements OnInit {
  accept$: Observable<boolean>;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.accept$ = this.store.select((store) => store.setting.accept);
  }

  toggleAccept(): void {
    this.accept$.pipe(take(1)).subscribe((accept) => {
      this.store.dispatch(editSetting({ setting: { accept: !accept } }));
    });
  }
}
