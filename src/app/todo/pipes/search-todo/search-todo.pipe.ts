import {Pipe, PipeTransform} from '@angular/core';
import {IToDo} from '../../interface/ito-do';

@Pipe({
  name: 'searchTodo'
})
export class SearchTodoPipe implements PipeTransform {

  transform(value: IToDo[], startSearch: string): IToDo[] {
    if (!startSearch.trim()) {
      return value;
    }
    return value
      .filter(item => item.label.toLocaleLowerCase().includes(startSearch.toLowerCase()));
  }

}
