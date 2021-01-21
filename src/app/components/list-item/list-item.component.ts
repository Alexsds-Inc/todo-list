import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '@shared/models/todo.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() todo: Todo;

  @Output() toggle = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onToggle(): void {
    if (event) {
      event.preventDefault();
    }
    this.toggle.emit();
  }
}
