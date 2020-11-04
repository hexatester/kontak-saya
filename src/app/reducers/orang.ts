import { createReducer, on } from '@ngrx/store';
import { editOrang, hapusOrang, tambahOrang } from '../actions/orang';
import { Orang } from '../models/orang';

export interface OrangState {
  list: Array<Orang>;
}

export const initialOrangState: OrangState = {
  list: [],
};

export const orangReducer = createReducer(
  initialOrangState,
  on(tambahOrang, (state, { orang }) => ({
    ...state,
    list: [orang, ...state.list],
  })),
  on(editOrang, (state, { orang }) => {
    let list = state.list.filter((o) => o.id !== orang.id);
    return { ...state, list: [...list, orang] };
  }),
  on(hapusOrang, (state, { id }) => ({
    ...state,
    list: state.list.filter((o) => o.id !== id),
  }))
);
