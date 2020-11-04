import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../environments/environment';
import { covidReducer, CovidState } from './covid';
import { kontakReducer, KontakState } from './kontak';
import { orangReducer, OrangState } from './orang';
import { settingReducer, SettingState } from './setting';

export interface State {
  kontak: KontakState;
  orang: OrangState;
  setting: SettingState;
  covid: CovidState;
}

export const reducers: ActionReducerMap<State> = {
  kontak: kontakReducer,
  orang: orangReducer,
  setting: settingReducer,
  covid: covidReducer,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['kontak', 'orang', 'setting', 'covid'],
    rehydrate: true,
  })(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [localStorageSyncReducer]
  : [localStorageSyncReducer];
