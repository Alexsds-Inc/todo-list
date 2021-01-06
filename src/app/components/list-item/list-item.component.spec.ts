import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListItemComponent} from './list-item.component';
import {TodoService} from '@shared/services/todo.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListItemComponent],
      providers: [TodoService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    component.todo = {
      id: 1,
      task: 'Drink coffee',
      complete: false,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
