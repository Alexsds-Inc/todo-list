import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ListPageComponent} from './list-page.component';
import {TodoService} from '@shared/services/todo.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';

describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPageComponent],
      imports: [MatSnackBarModule, MatDialogModule, MatMenuModule],
      providers: [TodoService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
