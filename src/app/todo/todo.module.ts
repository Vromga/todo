import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseAddItemComponent} from './add-item/base-add-item/base-add-item.component';
import {ViewAddItemComponent} from './add-item/view-add-item/view-add-item.component';
import {BaseItemListComponent} from './item-list/base-item-list/base-item-list.component';
import {ViewItemListComponent} from './item-list/view-item-list/view-item-list.component';
import {BaseSearchItemComponent} from './search-item/base-search-item/base-search-item.component';
import {ViewSearchItemComponent} from './search-item/view-search-item/view-search-item.component';
import {ItemHoverDirective} from './item-list/directives/item-hover.directive';
import {BaseTodoComponent} from './base-todo/base-todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchTodoPipe} from './pipes/search-todo/search-todo.pipe';


@NgModule({
  declarations: [
    BaseAddItemComponent,
    ViewAddItemComponent,
    BaseItemListComponent,
    BaseSearchItemComponent,
    ViewSearchItemComponent,
    ViewItemListComponent,
    ItemHoverDirective,
    BaseTodoComponent,
    SearchTodoPipe
  ],
  exports: [
    BaseAddItemComponent,
    BaseItemListComponent,
    BaseSearchItemComponent,
    BaseTodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TodoModule {
}
