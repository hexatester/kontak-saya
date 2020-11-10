export interface Kontak {
  id: string;
  nama?: string;
  orang?: Array<string>;
  tipe?: TipeKontak;
  jaga?: JagaJarak;
  masker?: PakaiMasker;
  lokasi?: string;
  waktu?: Date;
  waktuEnd?: Date;
  catatan?: string;
  dibuat: Date;
}

export enum TipeKontak {
  IN_DOOR = 'In',
  OUT_DOOR = 'Out',
  NOT_DEFINED = 'N',
}

export enum JagaJarak {
  YA = 'Y',
  TIDAK = 'T',
  TIDAK_YAKIN = 'TY',
}

export enum PakaiMasker {
  YA = 'Y',
  TIDAK = 'T',
  TIDAK_YAKIN = 'TY',
}
