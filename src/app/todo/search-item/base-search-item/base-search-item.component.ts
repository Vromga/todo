import {Component, OnInit} from '@angular/core';
import {SearchTodoService} from '../../services/search-todo/search-todo.service';

@Component({
  selector: 'app-base-search-item',
  template: `
    <app-view-search-item (search)="searchTodo($event)"></app-view-search-item>`,
})
export class BaseSearchItemComponent implements OnInit {

  constructor(private st: SearchTodoService) {
  }

  ngOnInit(): void {
  }

  searchTodo(searchString: string): void {
    this.st.search = searchString;
  }
}
