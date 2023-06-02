import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/login-form/login-form';
import { useAppSelector } from '../../redux-store/hooks';
import { useEffect } from 'react'
import { AppRoute, AuthorizationStatus } from '../../utils/const/const';

export default function LoginPage() {
  const navigate = useNavigate()
  const authStatus = useAppSelector(state => state.USER.authorizationStatus)


  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.VacanciesPage)
    }

  }, [authStatus])


  return (
    <main>
      <LoginForm />
    </main>
  );
}
