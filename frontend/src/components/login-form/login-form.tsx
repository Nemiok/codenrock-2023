import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux-store/hooks';
import { loginAction } from '../../redux-store/api-actions';
import { Box } from '@mui/material'
import './styles.css'
import { AuthorizationStatus } from '../../utils/const/const';

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(state => state.USER.authorizationStatus)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch(loginAction({ login: username, password: password }));
    setUsername('');
    setPassword('');
  };

  return (
    <form className='LoginForm'>
      <Box className='LoginForm__Content'>
        <h2 className='LoginForm__Title'>Войдите в профиль</h2>

        <label className='LoginForm__Label'>
          <span>Логин:</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>


        <label className='LoginForm__Label'>
          <span>Пароль:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {authStatus === AuthorizationStatus.NoAuth &&
          <ul className='LoginForm__ErrorList'>
            <li className='LoginForm__ErrorItem'> Неверное имя пользователя или пароль</li>
          </ul>}

        <button className='LoginForm__SignInBtn' type='submit' onClick={handleLogin}>Войти</button>
      </Box>
    </form>
  );
};

export default LoginForm;
