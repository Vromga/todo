import { TestBed } from '@angular/core/testing';

import { StateTodoService } from './state-todo.service';

describe('StateTodoService', () => {
  let service: StateTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
