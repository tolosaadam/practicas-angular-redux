import { ActionReducerMap } from "@ngrx/store";

import { ValidFilters } from "./todos/filters/filter.actions";
import { TodoState } from "./todos/models/todo.state";

import { todoReducer } from "./todos/todo.reducer";
import { filterReducer } from "./todos/filters/filter.reducer";


export interface AppState {
    todos: TodoState;
    filter: ValidFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
};