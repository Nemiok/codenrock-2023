export const NameSpace = {
  App: 'APP',
  Candidates: 'CANDIDATES',
  User: 'USER',
} as const;

export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const APIRoute = {
  Login: '',
  Logout: '',
  Vacancies: '',
} as const;

export const enum AppRoute {
  MainPage = '/',
  VacanciesPage = '/vacancies/',
  VacancyPage = '/vacancies/:id',
  CandidatePage = '/candidate/:id',
  LoginPage = '/login',
  FavoritesPage = 'favorites',
  NotFoundPage = '*',
};

export const FilterName = {
  all: 'Все',
  open: 'Открытые',
  inprogress: 'В работе',
  complete: 'Архив',
} as const;

export const VacancyTabNames = {
  currVacancy: 'Вакансия',
  responses: 'Отклики',
  views: 'Просмотры',
} as const;

export const VacancyStatusType = {
  open: 'Открыта',
  inprogress: 'В работе',
  complete: 'Закрыта',
} as const;

export const enum LoadingStatus {
  Idle = 'IDLE',
  Pending = 'PENDING',
  Fulfilled = 'FULFILLED',
  Rejected = 'REJECTED',
}
