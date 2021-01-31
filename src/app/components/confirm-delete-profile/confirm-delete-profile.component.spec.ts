import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ConfirmDeleteProfileComponent} from './confirm-delete-profile.component';
import {MatDialogModule} from '@angular/material/dialog';

describe('ConfirmDeleteProfileComponent', () => {
  let component: ConfirmDeleteProfileComponent;
  let fixture: ComponentFixture<ConfirmDeleteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmDeleteProfileComponent],
      imports: [MatDialogModule],
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
