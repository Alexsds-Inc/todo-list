import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../interfaces/todo.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() todo!: Todo;

  constructor() {}

  ngOnInit(): void {}
}
