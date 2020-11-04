import { createReducer, on } from '@ngrx/store';
import {
  updateCovid,
  updateCovidBerhasil,
  updateCovidGagal,
} from '../actions/covid';
import { CovidID } from '../models/covid';

export interface CovidState {
  covid?: CovidID;
  last_updated?: Date;
  loading: boolean;
  error?: string;
}

export const initialCovidState: CovidState = {
  loading: false,
  error: undefined,
};

export const covidReducer = createReducer(
  initialCovidState,
  on(updateCovid, (state) => ({ ...state, loading: true })),
  on(updateCovidBerhasil, (state, { covid }) => ({
    ...state,
    covid,
    loading: false,
  })),
  on(updateCovidGagal, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
