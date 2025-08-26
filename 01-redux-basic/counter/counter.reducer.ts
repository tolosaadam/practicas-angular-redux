import { Action, Reducer } from "../ngrx-fake/ngrx";

export const counterReducer: Reducer<number> = (state = 10, action: Action) => {

    switch (action.type) {
        case 'INCREMENT':
            return state += 1;
        case 'DECREMENT':
            return state -= 1;
        case 'MULTIPLY':
            return state * action.payload;
        case 'DIVIDE':
            return state / action.payload;
        case 'RESET':
            return 0;
        default:
            return state; // Siempre debe devolver un estado, por más que no haga nada el reducer.
    }

};