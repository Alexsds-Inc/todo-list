import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ConfirmDeleteProfileComponent} from './confirm-delete-profile.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';

describe('ConfirmDeleteProfileComponent', () => {
  let component: ConfirmDeleteProfileComponent;
  let fixture: ComponentFixture<ConfirmDeleteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmDeleteProfileComponent],
      imports: [MatDialogModule, FormsModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
