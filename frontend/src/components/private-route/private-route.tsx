import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../redux-store/hooks';
import { getAuthorizationStatus } from '../../redux-store/user-process/selectors';
import { AuthorizationStatus, AppRoute } from '../../utils/const/const';

type PrivateRoutePropsType = {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: PrivateRoutePropsType) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const location = useLocation()

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.LoginPage} state={{ from: location }} />
  );
}
