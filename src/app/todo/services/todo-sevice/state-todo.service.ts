import {Injectable} from '@angular/core';
import {IToDo} from '../../interface/ito-do';
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class StateTodoService {
  todo: IToDo[] = [
    this.onCreateTodo('Learn Angular.'),
    this.onCreateTodo('Drink tea.'),
    this.onCreateTodo('Learn NodeJS.'),
    this.onCreateTodo('Play with my boys.'),
  ];


  onCreateTodo(label): IToDo {
    return {
      id: uuidv4(),
      label,
      important: false,
      done: false
    };
  }

  onAddTodo(label): void {
    this.todo = [...this.todo, this.onCreateTodo(label)];
  }

  onDeleteTodo(id): void {
    this.todo = this.todo.filter(todo => todo.id !== id);
  }

  changeProperty(id, prop): IToDo[] {
    return this.todo.map((todo: IToDo) => {
      if (todo.id === id) {
        todo[prop] = !todo[prop];
      }
      return todo;
    });
  }

  onToggleDone(id): void {
    this.todo = this.changeProperty(id, 'done');
  }

  onToggleImportant(id): void {
    this.todo = this.changeProperty(id, 'important');
  }
}
