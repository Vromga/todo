import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-todo',
  template: `
    <app-base-search-item></app-base-search-item>
    <app-base-item-list></app-base-item-list>
    <app-base-add-item></app-base-add-item>
  `,
  styles: [
  ]
})
export class BaseTodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
