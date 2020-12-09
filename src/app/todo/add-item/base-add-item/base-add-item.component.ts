import {Component} from '@angular/core';
import {StateTodoService} from '../../services/todo-sevice/state-todo.service';

@Component({
  selector: 'app-base-add-item',
  template: `
    <app-view-add-item (label)="onAddTodo($event)"></app-view-add-item>`,
})
export class BaseAddItemComponent {

  constructor(private s: StateTodoService) {
  }

  onAddTodo(label): void {
    this.s.onAddTodo(label);
  }
}
