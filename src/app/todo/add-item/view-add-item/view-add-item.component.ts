import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-view-add-item',
  templateUrl: './view-add-item.component.html',
  styleUrls: ['./view-add-item.component.css']
})
export class ViewAddItemComponent implements OnInit {
  public formAddTodo: FormGroup;
  @Output() label: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    this.formAddTodo = new FormGroup({
      label: new FormControl('',
        [Validators.minLength(3), Validators.required])
    });
  }

  onAddTodo(): void {
    this.label.emit(this.formAddTodo.value.label);
    this.formAddTodo.reset();
  }
}
