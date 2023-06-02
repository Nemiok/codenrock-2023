import React, {useState, useLayoutEffect} from 'react';
import {Router} from 'react-router-dom';
import type {BrowserHistory} from 'history';

export type HistoryRouterPropsType = {
  history: BrowserHistory
  basename?: string
  children?: React.ReactNode
}

export default function HistoryRouter({
  basename,
  children,
  history,
}: HistoryRouterPropsType) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}
