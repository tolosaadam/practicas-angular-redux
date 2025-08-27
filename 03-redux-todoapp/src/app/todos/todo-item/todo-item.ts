import { Component, ElementRef, Input, ViewChild, viewChild } from '@angular/core';

import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';

import { Store } from '@ngrx/store';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItem {
  @Input() todo!: Todo;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef<HTMLInputElement>;

  checkCompleted!: FormControl;
  txtInput!: FormControl;
  isEdit: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.isCompleted);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.checkCompleted.valueChanges.subscribe(value => {
      this.store.dispatch(todoActions.toggle({ id: this.todo.id }));
    });

  }

  edit(): void {
    this.isEdit = true;

    // Esto asegura que en el edit, se muestre el campo tal cual y como esta en el store.
    //  Previniendo que por más que se edite el txtInput y se prevenga la edición en el store por alguna validación, este vuelva a su estado original.
    this.txtInput.setValue(this.todo.text); 
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  endEdit(): void {
    this.isEdit = false;

    if (this.txtInput.invalid || this.txtInput.value === this.todo.text) {
      return;
    }

    this.store.dispatch(todoActions.edit({ id: this.todo.id, text: this.txtInput.value }));
  }

  delete(): void {
    this.store.dispatch(todoActions.remove({ id: this.todo.id }));
  }
}
