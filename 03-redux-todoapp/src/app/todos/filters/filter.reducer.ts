import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './filter.actions';
import { ValidFilters } from './filter.actions';

const initialState: ValidFilters = 'all' as ValidFilters;

const _filterReducer = createReducer(
    initialState,
    
    on(actions.set, (state, { filter }) => filter)
);

export function filterReducer(
    state: ValidFilters = initialState,
    action: Action
): ValidFilters {
    return _filterReducer(state, action);
}
