import { TestBed } from '@angular/core/testing';

import { SearchTodoService } from './search-todo.service';

describe('SearchTodoService', () => {
  let service: SearchTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
