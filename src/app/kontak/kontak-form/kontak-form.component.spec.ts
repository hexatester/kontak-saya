import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontakFormComponent } from './kontak-form.component';

describe('KontakFormComponent', () => {
  let component: KontakFormComponent;
  let fixture: ComponentFixture<KontakFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontakFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KontakFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
