import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';
import { TodoState } from './models/todo.state';

export const initialState: TodoState = {
    todos: [
        new Todo('Salvar al mundo'),
        new Todo('Vencer a Thanos'),
        new Todo('Conquistar el espacio'),
        new Todo('Salvar a la humanidad')
    ],
    loading: false,
    error: null
};

const _todoReducer = createReducer(

    initialState,

    on(actions.add, (state, { text }) => ({
        ...state,
        todos: [...state.todos, new Todo(text)]
    })),  // Siempre retornar un nuevo estado, y prevenir la mutación del objeto.

    on(actions.remove, (state, { id }) => ({
        ...state,
        todos: state.todos.filter(todo => todo.id !== id)
    })),

    on(actions.toggle, (state, { id }) => ({
        ...state,
        todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
    })),

    on(actions.toggleAll, (state, { completed }) => ({
        ...state,
        todos: state.todos.map(todo => ({ ...todo, isCompleted: completed })
        )
    })),

    on(actions.edit, (state, { id, text }) => ({
        ...state,
        todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, text: text } : todo
        )
    })),

    on(actions.removeCompleted, (state) => ({
        ...state,
        todos: state.todos.filter(todo => todo.isCompleted === false)
    })),

);

export function todoReducer(
    state: TodoState = initialState,
    action: Action
): TodoState {
    return _todoReducer(state, action);
}