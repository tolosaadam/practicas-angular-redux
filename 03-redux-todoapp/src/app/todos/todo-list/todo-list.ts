import { Component } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import * as todoSelectors from '../todo.selectors';
import * as filterSelectors from '../filters/filter.selectors';
import { Observable } from 'rxjs';
import { ValidFilters } from '../filters/filter.actions';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})

export class TodoList {

  todos$: Observable<Todo[]> = new Observable<Todo[]>();
  currentFilter$: Observable<ValidFilters>;

  constructor(private store: Store<AppState>) {
    this.todos$ = this.store.select(todoSelectors.selectTodos);
    this.currentFilter$ = this.store.select(filterSelectors.selectFilter);
  }

  ngOnInit(): void {    
  }

}
