import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../utils/const/const';
import {userProcess} from './user-process/user-process';
import {appProcess} from './app-process/app-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.App]: appProcess.reducer,
});
