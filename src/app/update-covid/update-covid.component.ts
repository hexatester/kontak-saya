import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateCovid } from '../actions/covid';
import { CovidID } from '../models/covid';
import { State } from '../reducers';

@Component({
  selector: 'app-update-covid',
  templateUrl: './update-covid.component.html',
  styleUrls: ['./update-covid.component.scss'],
})
export class UpdateCovidComponent implements OnInit {
  current$!: Observable<CovidID>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(updateCovid());
    this.current$ = this.store.select((state) => state.covid.covid);
  }
}
