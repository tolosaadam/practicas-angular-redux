import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  standalone: false,
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.css'
})
export class TodoAdd {
  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('Hola', Validators.required);
  }

  ngOnInit(): void {
  }

  add() {
    if (this.txtInput.invalid) { return; }
    this.store.dispatch(todoActions.add({ text: this.txtInput.value }));
    this.txtInput.reset();
  }

}
