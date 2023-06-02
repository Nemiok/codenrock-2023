import { store } from '../redux-store';

export type StateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
