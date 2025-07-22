import './styles.scss';
import Button from '../Button/Button';
import PopUp from '../PopUp/PopUp';
import { useState } from 'react';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__left">
          <img className="logo" src="images/logo.svg" alt="" />
          <nav className="nav">
            <a href="" className="nav__link">
              Learn
            </a>
            <a href="" className="nav__link">
              Plan
            </a>
            <a href="" className="nav__link">
              Finance
            </a>
            <a href="" className="nav__link">
              Wealth
            </a>
            <a href="" className="nav__link">
              About
            </a>
          </nav>
        </div>
        <div className="header__right">
          <Button onClick={toggleModal} title="Log in" className="header__text" isSecondary />
          <Button title="Get started" className="header__button" />
          <span>O</span>
        </div>
      </div>
      {isModalOpen && <PopUp toggleModal={toggleModal} />}
    </header>
  );
};

export default Header;
