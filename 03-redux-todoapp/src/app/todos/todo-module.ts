import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoAdd } from './todo-add/todo-add';
import { TodoFooter } from './todo-footer/todo-footer';
import { TodoItem } from './todo-item/todo-item';
import { TodoList } from './todo-list/todo-list';
import { TodoPage } from './todo-page/todo-page';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    TodoAdd,
    TodoFooter,
    TodoItem,
    TodoList,
    TodoPage,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoPage
  ]
})
export class TodoModule { }
