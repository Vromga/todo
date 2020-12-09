import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IToDo} from '../../interface/ito-do';
import {SearchTodoService} from '../../services/search-todo/search-todo.service';

@Component({
  selector: 'app-view-item-list',
  templateUrl: './view-item-list.component.html',
  styleUrls: ['./view-item-list.component.css']
})
export class ViewItemListComponent {

  @Input() todo: IToDo[] | undefined;
  @Output() done: EventEmitter<string> = new EventEmitter<string>();
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();
  @Output() important: EventEmitter<string> = new EventEmitter<string>();

  constructor(public st: SearchTodoService) {
  }

  onToggleDone(id): void {
    this.done.emit(id);
  }

  onDeleteTodo(id): void {
    this.delete.emit(id);
  }

  onToggleImportant(id): void {
    this.important.emit(id);
  }
}
