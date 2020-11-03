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
    state.list.forEach((o, i, list) => {
      if (o.id === orang.id) {
        list[i] = orang;
      }
    });
    return { ...state };
  }),
  on(hapusOrang, (state, { id }) => ({
    ...state,
    list: state.list.filter((o) => o.id !== id),
  }))
);
