import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../services/api';
import { validateEmail, validatePassword } from '../../../services/validate';
import { useDispatch } from 'react-redux';
import { setUserId } from '../../../redux/User';

const Login = ({ toggleModal, toggleLogin }) => {
  const [authValues, setAuthValues] = useState({ email: '', password: '' });
  const [authErrors, setAuthErrors] = useState({ email: '', password: '' });

  const dispatch = useDispatch();

  const onChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setAuthValues({ ...authValues, [key]: value });
    setAuthErrors({ ...authErrors, [key]: '' });
  };

  const handleAuth = async () => {
    const isValidPassword = handleValidatePassword();
    const isValidEmail = handleValidateEmail();

    if (isValidPassword || isValidEmail) {
      return;
    }

    const users = (await axios.get(`${API_URL}/users?email=${authValues.email}&password=${authValues.password}`)).data;
    const user = users[0];

    if (user?.id) {
      dispatch(setUserId(user.id));
      toggleModal();
    } else {
      alert('Неверный email или пароль');
    }
  };

  const handleValidateEmail = () => {
    return validateEmail(authValues, authErrors, setAuthErrors);
  };

  const handleValidatePassword = () => {
    return validatePassword(authValues, authErrors, setAuthErrors);
  };
  return (
    <>
      <h3>Вход</h3>

      <input
        onChange={onChange}
        onBlur={handleValidateEmail}
        value={authValues.email}
        name='email'
        type='text'
        placeholder='Email'
        className='auth-popup__input'
      />
      {authErrors.email && <div className='auth-popup__error'>{authErrors.email}</div>}
      <input
        onChange={onChange}
        onBlur={handleValidatePassword}
        value={authValues.password}
        name='password'
        type='text'
        placeholder='Password'
        className='auth-popup__input'
      />
      {authErrors.password && <div className='auth-popup__error'>{authErrors.password}</div>}
      <div className='auth-popup__link' onClick={toggleLogin}>
        Нет аккаунта? Зарегистрироваться
      </div>
      <button onClick={handleAuth}>Войти</button>
    </>
  );
};

export default Login;
