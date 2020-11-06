import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Orang } from 'src/app/models/orang';
import { State } from 'src/app/reducers';
import { editOrang, tambahOrang } from 'src/app/actions/orang';

@Component({
  selector: 'app-orang-form',
  templateUrl: './orang-form.component.html',
  styleUrls: ['./orang-form.component.scss'],
})
export class OrangFormComponent implements OnInit {
  id: string;
  orang?: Orang;
  orangForm: FormGroup;
  orangs$: Observable<Array<Orang>>;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private store: Store<State>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.orangs$ = this.store.select((state) => state.orang.list);
      this.orangs$
        .pipe(take(1))
        .subscribe(
          (orangs) => (this.orang = orangs.find((o) => o.id === this.id))
        );
    }
    this.orangForm = this.fb.group({
      nama: [this.orang?.nama || null, Validators.required],
      telepon: [this.orang?.telepon || null],
      alamat: [this.orang?.alamat || null],
    });
  }

  onSubmit() {
    let orang: Orang = {
      id: this.id || uuid(),
      ...this.orangForm.value,
    };
    if (this.id) {
      this.store.dispatch(editOrang({ orang }));
    } else {
      this.store.dispatch(tambahOrang({ orang }));
    }
    this.router.navigate(['orang']);
  }

  public get title(): string {
    return this.orang
      ? this.orang?.nama
        ? `Edit ${this.orang?.nama}`
        : 'Edit Orang'
      : 'Tambah Orang';
  }
}
