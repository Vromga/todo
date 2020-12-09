import {Component} from '@angular/core';
import {StateTodoService} from '../../services/todo-sevice/state-todo.service';

@Component({
  selector: 'app-base-item-list',
  template: `
    <app-view-item-list
      [todo]="state.todo"
      (done)="onToggleDone($event)"
      (important)="OnToggleImportant($event)"
      (delete)="onDelete($event)"
    ></app-view-item-list>`,
})
export class BaseItemListComponent {
  constructor(public state: StateTodoService) {
  }


  onToggleDone(id: string): void {
    this.state.onToggleDone(id);
  }

  OnToggleImportant(id: string): void {
    this.state.onToggleImportant(id);
  }

  onDelete(id: string): void {
    this.state.onDeleteTodo(id);
  }
}
