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
  private kontaks$: Observable<Array<Kontak>>;

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
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public get title(): string {
    return this.kontak
      ? this.kontak?.nama
        ? `Edit ${this.kontak?.nama}`
        : 'Edit Kontak'
      : 'Kontak Baru';
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.kontaks$ = this.store.select((store) => store.kontak.list);
      this.kontaks$
        .pipe(take(1))
        .subscribe(
          (kontaks) => (this.kontak = kontaks.find((k) => k.id === this.id))
        );
    }
    console.log(this.id);
    this.kontakForm = this.fb.group({
      nama: [this.kontak?.nama || null, Validators.required],
      lokasi: [this.kontak?.lokasi || null, Validators.required],
      tipe: [this.kontak?.tipe || null, Validators.required],
      jaga: [this.kontak?.jaga || null, Validators.required],
      waktu: [this.kontak?.waktu || null],
      catatan: [this.kontak?.catatan || null],
    });
  }

  onSubmit() {
    let kontak: Kontak = {
      id: this.id || uuid(),
      waktu: new Date(),
      ...this.kontakForm.value,
    };
    if (this.id) {
      this.store.dispatch(editKontak({ kontak }));
    } else {
      this.store.dispatch(tambahKontak({ kontak }));
    }
    console.log(kontak);
    this.router.navigate(['kontak']);
  }
}
