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
  data: any = 'Welcome to home page!';
  todos: any;
  constructor(private store: Store<{ todos: Todo[] }>) {
    store.pipe(select('todos')).subscribe(values => {
      this.todos = values;
    })
  }

  ngOnInit(): void {
  }

}
