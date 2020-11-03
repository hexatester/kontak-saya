import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../environments/environment';
import { kontakReducer, KontakState } from './kontak';
import { orangReducer, OrangState } from './orang';

export interface State {
  kontak: KontakState;
  orang: OrangState;
}

export const reducers: ActionReducerMap<State> = {
  kontak: kontakReducer,
  orang: orangReducer,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['kontak', 'orang'], rehydrate: true })(
    reducer
  );
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [localStorageSyncReducer]
  : [localStorageSyncReducer];
