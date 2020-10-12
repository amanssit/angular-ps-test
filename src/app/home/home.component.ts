import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todos: any;
  title = 'my-app';

  columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  constructor(private store: Store<{ todos: Todo[] }>) {
    store.pipe(select('todos')).subscribe(values => {
      this.todos = values;
    });
  }

  ngOnInit(): void {
  }

}
