import {StateType} from '../../types/state-type';
import {LoadingStatus, NameSpace} from '../../utils/const/const';
import {ApiResponse, VacancyRow} from '../../types/api-response';

export const getActiveFilter = (state: StateType): string => state[NameSpace.App].activeFilter;
export const getVacanciesTest = (state: StateType): ApiResponse | undefined => state[NameSpace.App].apiResponse;
export const getVacancy = (state: StateType): VacancyRow => state[NameSpace.App].vacancy;
export const getVacanciesLoadingStatus = (state: StateType): LoadingStatus => state[NameSpace.App].vacanciesLoadingStatus;
export const getVacancyLoadingStatus = (state: StateType): LoadingStatus => state[NameSpace.App].vacancyLoadingStatus;
