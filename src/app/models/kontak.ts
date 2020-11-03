import { Orang } from './orang';

export interface Kontak {
  id: string;
  nama: string;
  tipe: TipeKontak;
  jaga: JagaJarak;
  orang?: Orang;
  lokasi?: string;
  waktu?: Date;
  catatan?: string;
}

export enum TipeKontak {
  IN_DOOR = 'In',
  OUT_DOOR = 'Out',
}

export enum JagaJarak {
  YA = 'Y',
  TIDAK = 'T',
  TIDAK_YAKIN = 'TY',
}
