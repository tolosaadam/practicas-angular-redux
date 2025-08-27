import { createAction, props } from '@ngrx/store';

export type ValidFilters = 'all' | 'completed' | 'pending';

export const set = createAction(
    '[TODO FILTER] Set filter',
    props<{ filter: ValidFilters }>()
);