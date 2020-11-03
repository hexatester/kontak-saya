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
  IN = 'Dalam ruangan',
  OUT = 'Luar ruangan',
}

export enum JagaJarak {
  YA = 'Ya',
  TIDAK = 'Tidak',
  UN = 'Tidak yakin',
}
