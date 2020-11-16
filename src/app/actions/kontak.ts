import { createAction, props } from '@ngrx/store';
import { Kontak } from '../models/kontak';

export const tambahKontak = createAction(
  '[Kontak] Tambah kontak',
  props<{ kontak: Kontak }>()
);

export const editKontak = createAction(
  '[Kontak] Edit kontak',
  props<{ kontak: Kontak }>()
);

export const hapusKontak = createAction(
  '[Kontak] Hapus kontak',
  props<{ id: string }>()
);

export const hapusKontakLama = createAction(
  '[Kontak] Hapus kontak lama',
  props<{ hari?: number; tanggal?: Date }>()
);
