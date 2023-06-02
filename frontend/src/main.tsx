import React from "react";
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { store } from "./redux-store";
import { CssBaseline } from "@mui/material";
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';
import App from './app';
import ColorModeContextProvider from "./components/color-mode-context-provider/color-mode-context-provider";
import { fetchVacanciesAction } from './redux-store/api-actions';
import { getToken } from "./services/token";
import {changeAuthorizationStatus} from './redux-store/user-process/user-process';
import {AuthorizationStatus} from './utils/const/const';

const token = getToken()

if (token) {
  store.dispatch(fetchVacanciesAction(token));
  store.dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth))
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ColorModeContextProvider>
          <CssBaseline />
          <App />
        </ColorModeContextProvider>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
