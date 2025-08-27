import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "./models/todo.state";


export const selectTodoState = createFeatureSelector<TodoState>('todos');

export const selectTodos = createSelector(
    selectTodoState,
    (state) => state.todos
);

export const selectTodosLoading = createSelector(
    selectTodoState,
    (state) => state.loading
);

export const selectTodosError = createSelector(
    selectTodoState,
    (state) => state.error
);

export const selectTodosPending = createSelector(
    selectTodoState,
    (state) => state.todos.filter(todo => !todo.isCompleted).length
);

export const selectTodosCompleted = createSelector(
    selectTodoState,
    (state) => state.todos.filter(todo => todo.isCompleted).length
);
