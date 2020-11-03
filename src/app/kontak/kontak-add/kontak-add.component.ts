import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { Kontak } from 'src/app/models/kontak';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { tambahKontak } from 'src/app/actions/kontak';
import { Router } from '@angular/router';

interface TipeOption {
  name: string;
  abbreviation: string;
}

@Component({
  selector: 'app-kontak-add',
  templateUrl: './kontak-add.component.html',
  styleUrls: ['./kontak-add.component.scss'],
})
export class KontakAddComponent {
  kontakForm = this.fb.group({
    nama: [null, Validators.required],
    lokasi: [null, Validators.required],
    tipe: [null, Validators.required],
    jaga: [null, Validators.required],
    waktu: [null],
    catatan: [null],
  });

  TIPE_KONTAK: TipeOption[] = [
    { name: 'Dalam Ruangan', abbreviation: 'In' },
    { name: 'Luar Ruangan', abbreviation: 'Out' },
  ];

  JAGA_JARAK: TipeOption[] = [
    { name: 'Ya', abbreviation: 'Y' },
    { name: 'Tidak', abbreviation: 'T' },
    { name: 'Tidak yakin', abbreviation: 'TY' },
  ];

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private router: Router
  ) {}

  onSubmit() {
    let kontak: Kontak = {
      id: uuid(),
      waktu: new Date(),
      ...this.kontakForm.value,
    };
    console.log(kontak);
    this.store.dispatch(tambahKontak({ kontak }));
    this.router.navigate(['kontak']);
  }
}
