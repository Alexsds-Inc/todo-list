import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TaskFormComponent} from './task-form.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

describe('AddTaskComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskFormComponent],
      imports: [MatDialogModule, FormsModule, MatSnackBarModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
