import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatDialogModule} from '@angular/material/dialog';

import {ProfileComponent} from './profile.component';
import {AuthService} from '@shared/services/auth.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [MatDialogModule],
      providers: [AuthService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
