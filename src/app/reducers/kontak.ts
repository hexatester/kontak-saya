import { createReducer, on } from '@ngrx/store';
import { editKontak, hapusKontak, tambahKontak } from '../actions/kontak';
import { JagaJarak, Kontak, TipeKontak } from '../models/kontak';

export interface KontakState {
  list: Array<Kontak>;
}

export const initialKontakState: KontakState = {
  list: [
    {
      id: 'ABC',
      nama: 'Aku',
      tipe: TipeKontak.IN_DOOR,
      jaga: JagaJarak.YA,
    },
  ],
};

export const kontakReducer = createReducer(
  initialKontakState,
  on(tambahKontak, (state, { kontak }) => ({
    ...state,
    list: [kontak, ...state.list],
  })),
  on(editKontak, (state, { kontak }) => {
    state.list.forEach((k, i, list) => {
      if (k.id === kontak.id) {
        list[i] = kontak;
      }
    });
    return { ...state };
  }),
  on(hapusKontak, (state, { id }) => ({
    ...state,
    list: state.list.filter((k) => k.id !== id),
  }))
);
