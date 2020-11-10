import { createSelector } from '@ngrx/store';
import { State } from '../reducers';
import { OrangState } from '../reducers/orang';

export const getOrangState = (state: State): OrangState => state.orang;

export const getOrang = createSelector(
  getOrangState,
  (state: OrangState, props: any) => state.list.find((o) => o.id === props.id)
);
