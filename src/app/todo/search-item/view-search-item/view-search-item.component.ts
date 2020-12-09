import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';


@Component({
  selector: 'app-view-search-item',
  templateUrl: './view-search-item.component.html',
  styleUrls: ['./view-search-item.component.css']
})
export class ViewSearchItemComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  searchString: FormControl;

  ngOnInit(): void {
    this.searchString = new FormControl('', []);
    this.searchString.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      ).subscribe((s) => this.search.emit(s));
  }
}
