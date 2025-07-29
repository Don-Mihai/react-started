import './styles.scss';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import axios from 'axios';
import { API_URL } from '../../services/api';
import { LOCAL_STORAGE_USER } from '../../services/utils';

const AuthPopUp = ({ toggleModal, isModalOpen }) => {
  const [isLogin, setIsLogin] = useState(true);

  const [authValues, setAuthValues] = useState({ email: '', password: '' });

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const onChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setAuthValues({ ...authValues, [key]: value });
  };

  const handleAuth = async () => {
    const users = (await axios.get(`${API_URL}/users?email=${authValues.email}&password=${authValues.password}`)).data;
    const user = users[0];

    if (user?.id) {
      localStorage.setItem(LOCAL_STORAGE_USER, user.id);
      toggleModal();
    } else {
      alert('Неверный email или пароль');
    }
  };

  const [registerValues, setRegisterValues] = useState({ name: '', email: '', password: '' });

  const onChangeRegister = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setRegisterValues({ ...registerValues, [key]: value });
  };

  const handleRegister = async () => {
    await axios.post(`${API_URL}/users`, registerValues);
    clearValues(registerValues);
  };

  //todo: доделать очистку
  const clearValues = (obj) => {
    Object.keys(obj).forEach((key) => {
      obj[key] = '';
    });
  };

  return (
    <Modal open={isModalOpen} toggleModal={toggleModal} className="auth-popup">
      {isLogin ? (
        <>
          <h3>Вход</h3>
          <input onChange={onChange} value={authValues.email} name="email" type="text" placeholder="Email" className="auth-popup__input" />
          <input onChange={onChange} value={authValues.password} name="password" type="text" placeholder="Password" className="auth-popup__input" />
          <div className="auth-popup__link" onClick={toggleLogin}>
            Нет аккаунта? Зарегистрироваться
          </div>
          <button onClick={handleAuth}>Войти</button>
        </>
      ) : (
        <>
          <h3>Регистрация</h3>
          <input onChange={onChangeRegister} value={registerValues.name} name="name" type="text" placeholder="Name" className="auth-popup__input" />
          <input onChange={onChangeRegister} value={registerValues.email} name="email" type="text" placeholder="Email" className="auth-popup__input" />
          <input onChange={onChangeRegister} value={registerValues.password} name="password" type="text" placeholder="Password" className="auth-popup__input" />
          <div className="auth-popup__link" onClick={toggleLogin}>
            Уже есть аккаунт? Войти
          </div>
          <button onClick={handleRegister}>Регистрация</button>
        </>
      )}
    </Modal>
  );
};

export default AuthPopUp;
