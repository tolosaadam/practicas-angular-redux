import { createAction, props } from '@ngrx/store';

export const add = createAction(
    '[TODO] Add Todo',
    props<{ text: string }>()
);

export const remove = createAction(
    '[TODO] Remove Todo',
    props<{ id: number }>()
);