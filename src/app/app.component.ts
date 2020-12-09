import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="wrap">
      <app-base-todo></app-base-todo>
    </div>`,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        width: 100%;
      }

      .wrap {
        max-width: 800px;
        width: 100%;
        min-width: 300px;
      }`
  ]
})
export class AppComponent {
}
