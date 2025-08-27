import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './contador.actions';

const initialState = 0;

const _contadorReducer = createReducer(
    initialState,
    on(actions.incrementar, (state) => state + 1),

    on(actions.decrementar, (state) => state - 1),

    on(actions.multiplicar, (state, { numero }) => state * numero),

    on(actions.dividir, (state, { numero }) => state / numero),

    on(actions.resetear, () => initialState)
);

export function contadorReducer(
    state: number = initialState,
    action: Action
): number {
    return _contadorReducer(state, action);
}