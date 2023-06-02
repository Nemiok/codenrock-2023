import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import {rootReducer} from './root-reducer';
import {redirect} from './middlewares/redirect';

export const api = createAPI();

export const createStore = (initialState = {}) =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: api,
        },
      }).concat(redirect),
    preloadedState: initialState,
  });

export const store = createStore();
