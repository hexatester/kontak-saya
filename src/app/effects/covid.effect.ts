import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  updateCovid,
  updateCovidBerhasil,
  updateCovidGagal,
} from '../actions/covid';
import { UpdateCovidService } from '../update-covid.service';

@Injectable()
export class CovidEffects {
  updateCovid$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCovid),
      mergeMap(() =>
        this.service.get().pipe(
          map((covid) => updateCovidBerhasil({ covid })),
          catchError((error) => of(updateCovidGagal({ error })))
        )
      )
    )
  );
  constructor(private actions$: Actions, private service: UpdateCovidService) {}
}
