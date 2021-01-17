import {Component, OnInit} from '@angular/core';
import {Todo} from '@shared/models/todo.model';
import {TodoService} from '@shared/services/todo.service';

@Component({
  selector: 'app-completed-page',
  templateUrl: './completed-page.component.html',
  styleUrls: ['./completed-page.component.scss'],
})
export class CompletedPageComponent implements OnInit {
  title = 'Completed 🎉';
  todoList: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getCompleted().subscribe((list) => {
      this.todoList = list;
    });
  }

  inComplete(id: number): void {
    setTimeout(() => {
      this.todoService.inComplete(id);
    }, 500);
  }
}
