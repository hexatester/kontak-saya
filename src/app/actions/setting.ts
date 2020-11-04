import { createAction, props } from '@ngrx/store';
import { Setting } from '../models/setting';

export const editSetting = createAction(
  '[Setting] Edit orang',
  props<{ setting: Setting }>()
);
