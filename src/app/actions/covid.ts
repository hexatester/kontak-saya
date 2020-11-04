import { createAction, props } from '@ngrx/store';
import { CovidID } from '../models/covid';

export const updateCovid = createAction('[Covid] Dapatkan update');

export const updateCovidBerhasil = createAction(
  '[Covid] Dapatkan update berhasil',
  props<{ covid: CovidID }>()
);

export const updateCovidGagal = createAction(
  '[Covid] Dapatkan update gagal',
  props<{ error: string }>()
);
