import { createAction, props } from '@ngrx/store';
import { Orang } from '../models/orang';

export const tambahOrang = createAction(
  '[Orang] Tambah orang',
  props<{ orang: Orang }>()
);

export const editOrang = createAction(
  '[Orang] Edit orang',
  props<{ orang: Orang }>()
);

export const hapusOrang = createAction(
  '[Orang] Hapus orang',
  props<{ id: string }>()
);
