import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  standalone: false,
  templateUrl: './todo-page.html',
  styleUrl: './todo-page.css'
})
export class TodoPage {
  completed: boolean = false;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

  }

  toggleAll(): void {
    this.completed = !this.completed;
    this.store.dispatch(todoActions.toggleAll({ completed: this.completed }));
  }

}
