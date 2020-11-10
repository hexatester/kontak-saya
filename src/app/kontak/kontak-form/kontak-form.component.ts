import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { Kontak } from 'src/app/models/kontak';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { editKontak, tambahKontak } from 'src/app/actions/kontak';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Orang } from 'src/app/models/orang';

interface TipeOption {
  name: string;
  abbreviation: string;
}

@Component({
  selector: 'app-kontak-form',
  templateUrl: './kontak-form.component.html',
  styleUrls: ['./kontak-form.component.scss'],
})
export class KontakFormComponent implements OnInit {
  kontakForm: FormGroup;
  id: String;
  kontak?: Kontak;
  orangs$: Observable<Array<Orang>>;
  private kontaks$: Observable<Array<Kontak>>;

  TIPE_KONTAK: TipeOption[] = [
    { name: 'Dalam ruangan', abbreviation: 'In' },
    { name: 'Luar ruangan', abbreviation: 'Out' },
    { name: 'Tidak dapat ditentukan', abbreviation: 'N' },
  ];

  JAGA_JARAK: TipeOption[] = [
    { name: 'Ya', abbreviation: 'Y' },
    { name: 'Tidak', abbreviation: 'T' },
    { name: 'Tidak yakin', abbreviation: 'TY' },
  ];

  PAKAI_MASKER: TipeOption[] = [
    { name: 'Ya', abbreviation: 'Y' },
    { name: 'Tidak', abbreviation: 'T' },
    { name: 'Tidak yakin', abbreviation: 'TY' },
  ];

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.orangs$ = this.store.select((state) => state.orang.list);
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.kontaks$ = this.store.select((store) => store.kontak.list);
      this.kontaks$
        .pipe(take(1))
        .subscribe(
          (kontaks) => (this.kontak = kontaks.find((k) => k.id === this.id))
        );
    }
    this.kontakForm = this.fb.group({
      nama: [this.kontak?.nama || null, Validators.required],
      orang: [this.kontak?.orang || []],
      lokasi: [this.kontak?.lokasi || null, Validators.required],
      tipe: [this.kontak?.tipe || 'In', Validators.required],
      jaga: [this.kontak?.jaga || 'Y', Validators.required],
      masker: [this.kontak?.masker || 'Y', Validators.required],
      waktu: [this.kontak?.waktu || new Date(), Validators.required],
      waktuEnd: [this.kontak?.waktuEnd || new Date()],
      catatan: [this.kontak?.catatan || null],
    });
  }

  onSubmit() {
    let kontak: Kontak = {
      id: this.id || uuid(),
      dibuat: this.kontakForm.value?.dibuat || new Date(),
      ...this.kontakForm.value,
    };
    if (this.id) {
      this.store.dispatch(editKontak({ kontak }));
    } else {
      this.store.dispatch(tambahKontak({ kontak }));
    }
    this.router.navigate(['kontak']);
  }

  public get title(): string {
    return this.kontak
      ? this.kontak?.nama
        ? `Edit ${this.kontak?.nama}`
        : 'Edit Kontak'
      : 'Kontak Baru';
  }

  public get maxDate(): Date {
    return new Date();
  }
}
