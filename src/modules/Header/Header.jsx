import './styles.scss';
import Button from '../../components/Button/Button';
import AuthPopUp from '../AuthPopUp/AuthPopUp';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import Avatar from '../../components/Avatar/Avatar';
import { LOCAL_STORAGE_USER } from '../../services/utils';
import { API_URL } from '../../services/api';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/Counter';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TextField from '@mui/material/TextField';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    getUser();
  }, [isModalOpen]);

  const getUser = async () => {
    try {
      const userId = localStorage.getItem(LOCAL_STORAGE_USER);
      if (userId) {
        const user = (await axios.get(`${API_URL}/users/${userId}`)).data;
        setUser(user);
      }
    } catch (error) {
      setUser({});
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleFeedback = () => {
    setIsFeedbackOpen(!isFeedbackOpen);
  };

  const handleAvatarClick = () => {
    const userId = localStorage.getItem(LOCAL_STORAGE_USER);
    navigate(`/profile/${userId}`);
  };

  return (
    <header className='header'>
      <div className='container header__container'>
        <IconButton color='success' onClick={() => dispatch(increment())}>
          <AddIcon />
        </IconButton>
        <IconButton onClick={() => dispatch(decrement())}>
          <RemoveIcon />
        </IconButton>
        <TextField label='Age' variant='filled' />

        <div className='header__left'>
          <Link to='/'>
            <img className='logo' src='images/logo.svg' alt='' />
          </Link>
          <nav className='nav'>
            <Link to='/' className='nav__link'>
              Learn
            </Link>
            <Link to='/' className='nav__link'>
              Plan
            </Link>
            <Link to='/portfolio' className='nav__link'>
              Portfolio
            </Link>
            <Link to='/wealth' className='nav__link'>
              Wealth
            </Link>
            <Link to='/about' className='nav__link'>
              About
            </Link>
          </nav>
        </div>
        <div className='header__right'>
          {user?.id ? (
            <Avatar name={user.firstName} onClick={handleAvatarClick} />
          ) : (
            <Button onClick={toggleModal} title='Log in' className='header__text' isSecondary />
          )}

          <Button onClick={toggleFeedback} title='Get started' className='header__button' />
        </div>
      </div>

      <Modal open={isFeedbackOpen} toggleModal={toggleFeedback}>
        <div>
          <h2>Feedback</h2>
          <p>Please leave your feedback here.</p>
        </div>
      </Modal>

      <AuthPopUp isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </header>
  );
};

export default Header;
