import { Routes, Route, generatePath, Navigate } from 'react-router-dom';
import { AppRoute } from './utils/const/const';
import PrivateRoute from './components/private-route/private-route';
import LayoutPage from './pages/layout-page/layout-page';
import { lazy } from 'react';
import './assets/styles/reset.css'
import './assets/styles/globalVariables.css';
import VacancyPage from './pages/vacancy-page/vacancy-page';

const MainPage = lazy(() => import('./pages/main-page/main-page'));
const VacanciesPage = lazy(() => import('./pages/vacancies-page/vacancies-page'));
const CandidatePage = lazy(() => import('./pages/candidate-page/candidate-page'));
const LoginPage = lazy(() => import('./pages/login-page/login-page'));
const NotFoundPage = lazy(() => import('./pages/not-found-page/not-found-page'));

export default function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path={AppRoute.MainPage} element={<LayoutPage />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Navigate to={AppRoute.VacanciesPage} />
              </PrivateRoute>
            }
          />

          <Route
            path={AppRoute.VacanciesPage}
            element={
              <PrivateRoute>
                <VacanciesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.CandidatePage}
            element={
              <PrivateRoute>
                <CandidatePage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.VacancyPage}
            element={
              <PrivateRoute>
                <VacancyPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.LoginPage} element={<LoginPage />} />
          <Route path={AppRoute.NotFoundPage} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
