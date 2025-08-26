import { incrementAction, multiplyAction } from "./counter/counter.actions";
import { counterReducer } from "./counter/counter.reducer";
import { Action, Reducer } from "./ngrx-fake/ngrx";

class Store<T> {

    constructor(
        private reducer: Reducer<T>,
        private state: T) {
    }

    getState(): T {
        return this.state;
    }

    dispatch(action: Action) {
        this.state = this.reducer(this.state, action);
    }
}

const initialState = 10;

const store = new Store(counterReducer, initialState);

console.log(store.getState()); // Estado inicial

store.dispatch(incrementAction);
store.dispatch(incrementAction);

console.log(store.getState());

store.dispatch(multiplyAction);

console.log(store.getState());