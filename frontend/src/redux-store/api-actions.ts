import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatchType, StateType } from '../types/state-type';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../utils/const/const';
import { LoginInfoType, LogoutInfoType, UserDataType } from '../types/user-data-type';
import { ApiResponse, UserLoginResponseType, UserLogoutResponseType, VacancyRow } from '../types/api-response';
import { ApiResponseResume } from '../types/api-response-resume';
import { redirectToRoute } from './action';
import { dropToken, getToken, saveToken } from '../services/token';
import {store} from '.';

export const loginAction = createAsyncThunk<
  UserLoginResponseType,
  LoginInfoType,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }>('user/logIn', async (loginInfo, { extra: api }) => {
    const { data } = await api.post<UserLoginResponseType>(APIRoute.Login, {

      action: "oauth",
      do: "login",
      proxysalt: "123", // всегда используем это значение
      domain: "", // не обязательно
      login: loginInfo.login,
      password: loginInfo.password

    })

    if (typeof data === 'string') {
      throw new Error('Wrong credentials')
    }

    if (typeof data === 'object' && data?.state === 'error') {
      throw new Error('Wrong credentials')
    }

    saveToken(data.session_key)
    store.dispatch(fetchVacanciesAction(data.session_key));

    return data
  })

export const logoutAction = createAsyncThunk<
  UserLogoutResponseType,
  undefined,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }>('user/logOut', async (_arg, { extra: api }) => {
    const { data } = await api.post<UserLogoutResponseType>(APIRoute.Login, {
      action: "oauth",
      do: "logout"
    })
    dropToken()
    return data
  })

export const sendSearchParamsAction = createAsyncThunk<
  ApiResponse,
  string,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('app/sendSearchParams', async (searchParams, { extra: api }) => {
  const {data} = await api.post<ApiResponse>(
    APIRoute.Vacancies,
    {
      action: 'model',
      do: 'get_data',
      model_name: 'vacancy',
      page: 1,
      per_page: '10',
      grid_item: [
        'vacancy_id',
        'title',
        'city_id',
        'stack',
        'client_id',
        'status_id',
        'experience',
        'employment',
        'created_at',
      ],
      params: {
        concatenate_search: searchParams, // необязательный параметр поиска по ключевому слову
        status_id: [
          'open', // можно один параметр или
          'inprogress', // несколько и будет фильтрация по status_id
        ],
      },
    },
    {
      params: {
        session_key: getToken(),
      },
    }
  );

  return data;
});

export const sendResumeListAction = createAsyncThunk<
  ApiResponseResume,
  string,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('app/sendResumeListAction', async (searchParams, { extra: api }) => {
  const {data} = await api.post<ApiResponseResume>(
    APIRoute.Vacancies,
    {
      action: 'model',
      do: 'get_data',
      model_name: 'resume',
      page: 1,
      per_page: '10',
      grid_item: ['title', 'resume_id', 'description', 'education', 'stack', 'salary'],
      params: {
        concatenate_search: searchParams, // необязательный параметр поиска по ключевому слову
      },
    },
    {
      params: {
        session_key: getToken(),
      },
    }
  );

  return data;
});

export const fetchVacanciesAction = createAsyncThunk<
  ApiResponse,
  string,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('app/fetchVacanciesAction', async (token, { extra: api }) => {
  const {data} = await api.post(
    APIRoute.Vacancies,
    {
      action: 'model',
      do: 'get_data',
      model_name: 'vacancy',
      page: 1,
      per_page: '10',
      grid_item: [
        'vacancy_id',
        'title',
        'city_id',
        'stack',
        'client_id',
        'status_id',
        'experience',
        'employment',
        'created_at',
      ],
    },
    {
      params: {
        session_key: getToken(),
      },
    }
  );

  return data;
});

export const fetchVacancyAction = createAsyncThunk<
  VacancyRow,
  string | undefined,
  {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
  }
>('app/fetchVacancyAction', async (id, { dispatch, extra: api }) => {
  const {data} = await api.post(
    APIRoute.Vacancies,
    {
      action: 'model',
      do: 'load_data',
      model_name: 'vacancy',
      primary_key: 'vacancy_id',
      key_value: id,
      ql_items: null,
      grid_item: [
        'vacancy_id',
        'title',
        'city_id',
        'stack',
        'client_id',
        'status_id',
        'experience',
        'employment',
        'created_at',
      ],
    },
    {
      params: {
        session_key: getToken(),
      },
    }
  );

  if (!data.data) {
    dispatch(redirectToRoute(AppRoute.NotFoundPage));
    return
  }

  return data.data;
});
