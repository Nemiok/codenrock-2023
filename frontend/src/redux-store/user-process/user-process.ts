import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../utils/const/const';
import { loginAction, logoutAction } from '../api-actions';

export type UserProcessType = {
  authorizationStatus: AuthorizationStatus;
};

const initialState: UserProcessType = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    changeAuthorizationStatus: (state, action) => {
      state.authorizationStatus = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(loginAction.fulfilled, state => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, state => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, state => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
      });
  },
});

export const { changeAuthorizationStatus } = userProcess.actions;
