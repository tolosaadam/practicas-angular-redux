import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [];

const _todoReducer = createReducer(

    initialState,

    on(actions.add, (state, { text }) => [...state, new Todo(text)]),  // Siempre retornar un nuevo estado, y prevenir la mutación del objeto.

    on(actions.remove, (state, { id }) => state.filter(todo => todo.id !== id)),
);

export function todoReducer(state: Todo[] = initialState, action: Action<string>) {
    return _todoReducer(state, action);
}