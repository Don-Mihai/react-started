import './styles.scss';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import Login from './Login/Login';
import Register from './Register/Register';

const AuthPopUp = ({ toggleModal, isModalOpen }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Modal open={isModalOpen} toggleModal={toggleModal} className="auth-popup">
      {isLogin ? (
        <Login toggleLogin={toggleLogin} toggleModal={toggleModal} />
      ) : (
        <Register toggleLogin={toggleLogin} toggleModal={toggleModal} />
      )}
    </Modal>
  );
};

export default AuthPopUp;
