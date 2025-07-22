import './styles.scss';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';

const AuthPopUp = ({ toggleModal, isModalOpen }) => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <Modal open={isModalOpen} toggleModal={toggleModal} className="auth-popup">
      {isLogin ? (
        <>
          <h3>Вход</h3>
          <input type="text" placeholder="Email" className="auth-popup__input" />
          <input type="text" placeholder="Password" className="auth-popup__input" />
          <div className="auth-popup__link" onClick={toggleLogin}>
            Нет аккаунта? Зарегистрироваться
          </div>
        </>
      ) : (
        <>
          <h3>Регистрация</h3>
          <input type="text" placeholder="Name" className="auth-popup__input" />
          <input type="text" placeholder="Email" className="auth-popup__input" />
          <div className="auth-popup__link" onClick={toggleLogin}>
            Уже есть аккаунт? Войти
          </div>
        </>
      )}
    </Modal>
  );
};

export default AuthPopUp;
