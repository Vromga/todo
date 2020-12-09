import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSearchItemComponent } from './view-search-item.component';

describe('ViewSearchItemComponent', () => {
  let component: ViewSearchItemComponent;
  let fixture: ComponentFixture<ViewSearchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSearchItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
