import './styles.scss';
import Button from '../../components/Button/Button';
import AuthPopUp from '../AuthPopUp/AuthPopUp';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleFeedback = () => {
    setIsFeedbackOpen(!isFeedbackOpen);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__left">
          <Link to="/">
            <img className="logo" src="images/logo.svg" alt="" />
          </Link>
          <nav className="nav">
            <Link to="/" className="nav__link">
              Learn
            </Link>
            <Link to="/" className="nav__link">
              Plan
            </Link>
            <Link to="/" className="nav__link">
              Finance
            </Link>
            <Link to="/wealth" className="nav__link">
              Wealth
            </Link>
            <Link to="/about" className="nav__link">
              About
            </Link>
          </nav>
        </div>
        <div className="header__right">
          <Button onClick={toggleModal} title="Log in" className="header__text" isSecondary />
          <Button onClick={toggleFeedback} title="Get started" className="header__button" />
          <span>O</span>
        </div>
      </div>

      <Modal open={isFeedbackOpen} toggleModal={toggleFeedback}>
        <div>
          <h2>Feedback</h2>
          <p>Please leave your feedback here</p>
        </div>
      </Modal>

      <AuthPopUp isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </header>
  );
};

export default Header;
