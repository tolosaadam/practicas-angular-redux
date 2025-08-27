import { createAction, props } from '@ngrx/store';

export const add = createAction(
    '[TODO] Add Todo',
    props<{ text: string }>()
);

export const remove = createAction(
    '[TODO] Remove Todo',
    props<{ id: number }>()
);

export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[TODO] ToggleAll Todo',
    props<{ completed: boolean }>()
);

export const edit = createAction(
    '[TODO] Edit Todo',
    props<{ id: number; text: string }>()
);

export const removeCompleted = createAction(
    '[TODO] Remove Completed Todos'
);