import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../interfaces/todo.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  title = 'To Do List';
  todoList: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoList = this.todoService.getAll();
  }
}
