import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../utils/const/const';

export const redirectToRoute = createAction<AppRoute>('Route/redirectToRoute');
