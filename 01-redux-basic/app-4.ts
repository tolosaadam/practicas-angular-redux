import { createStore, Store } from "redux";
import { counterReducer } from "./counter/counter.reducer";
import { decrementAction, incrementAction, multiplyAction, resetAction } from "./counter/counter.actions";

const store: Store<number, any> = createStore(counterReducer);

store.subscribe(() => {
    console.log('state changed:', store.getState());
});

store.dispatch(incrementAction);
store.dispatch(decrementAction);
store.dispatch(multiplyAction);
store.dispatch(resetAction);