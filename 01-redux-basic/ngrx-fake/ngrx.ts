export interface Action {
    type: string;
    payload?: any;
};

export type Reducer<T> = (state: T | undefined, action: Action) => T;