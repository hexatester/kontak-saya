import { createReducer, on } from '@ngrx/store';
import { editSetting } from '../actions/setting';

export interface SettingState {
  accept: boolean;
  notifikasi: boolean;
}

export const initialSettingState: SettingState = {
  accept: false,
  notifikasi: false,
};

export const settingReducer = createReducer(
  initialSettingState,
  on(editSetting, (state, { setting }) => ({ ...state, ...setting }))
);
