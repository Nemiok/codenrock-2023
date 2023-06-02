import {createSlice} from '@reduxjs/toolkit';
import {FilterName, LoadingStatus, NameSpace} from '../../utils/const/const';
import {fetchVacanciesAction, fetchVacancyAction, sendSearchParamsAction} from '../api-actions';
import {ApiResponse, VacancyRow} from '../../types/api-response';

const DEFAULT_FILTER = 'all'

export type AppProcessType = {
  activeFilter: keyof typeof FilterName;
  apiResponse?: ApiResponse;
  vacancy: VacancyRow;
  vacanciesLoadingStatus: LoadingStatus;
  vacancyLoadingStatus: LoadingStatus;
};

const initialState: AppProcessType = {
  activeFilter: DEFAULT_FILTER,
  vacanciesLoadingStatus: LoadingStatus.Idle,
  vacancyLoadingStatus: LoadingStatus.Idle,
  vacancy: {} as VacancyRow,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchVacanciesAction.fulfilled, (state, action) => {
        state.apiResponse = action.payload;
        state.vacanciesLoadingStatus = LoadingStatus.Fulfilled;
      })
      .addCase(fetchVacanciesAction.pending, state => {
        state.vacanciesLoadingStatus = LoadingStatus.Pending;
      })
      .addCase(fetchVacanciesAction.rejected, state => {
        state.vacanciesLoadingStatus = LoadingStatus.Rejected;
      })
      .addCase(sendSearchParamsAction.fulfilled, (state, action) => {
        state.apiResponse = action.payload;
        state.vacanciesLoadingStatus = LoadingStatus.Fulfilled;
      })
      .addCase(sendSearchParamsAction.pending, state => {
        state.vacanciesLoadingStatus = LoadingStatus.Pending;
      })
      .addCase(sendSearchParamsAction.rejected, state => {
        state.vacanciesLoadingStatus = LoadingStatus.Rejected;
      })
      .addCase(fetchVacancyAction.fulfilled, (state, action) => {
        state.vacancy = action.payload;
        state.vacancyLoadingStatus = LoadingStatus.Fulfilled;
      })
      .addCase(fetchVacancyAction.pending, state => {
        state.vacancyLoadingStatus = LoadingStatus.Pending;
      })
      .addCase(fetchVacancyAction.rejected, state => {
        state.vacancyLoadingStatus = LoadingStatus.Rejected;
      });
  },
});

export const {changeFilter} = appProcess.actions;
