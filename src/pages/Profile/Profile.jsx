import Header from '../../modules/Header/Header';
import Button from '../../components/Button/Button';
import Avatar from '../../components/Avatar/Avatar';
import './styles.scss';
import { LOCAL_STORAGE_USER } from '../../services/utils';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../services/api';
import { useSelector } from 'react-redux';

const initialUser = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  birthday: '',
  status: '',
  investments: '',
  portfolio: '',
  profitability: '',
};

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialUser);
  const [fetchedUser, setFetchedUser] = useState({});
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);
  const { value } = useSelector((store) => store.counter);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const userId = localStorage.getItem(LOCAL_STORAGE_USER);
      if (userId) {
        const user = (await axios.get(`${API_URL}/users/${userId}`)).data;
        setFetchedUser(user);
        setUser(user);
      }
    } catch (error) {
      setUser({});
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_USER);
    navigate('/');
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    let payload = { ...user };

    if (user.password !== fetchedUser.password) {
      payload.updatedAtPassword = new Date().toISOString();
    }
    const response = await axios.put(`${API_URL}/users/${user.id}`, payload);
    setFetchedUser(response.data);
    setUser(response.data);
    setIsPasswordEditing(false);
  };

  const handleChangePassword = () => {
    setIsPasswordEditing(!isPasswordEditing);
  };

  const handleDeleteAccount = async () => {
    await axios.delete(`${API_URL}/users/${user.id}`);
    handleLogout();
  };

  return (
    <div className='profile'>
      <Header />
      {value}
      <div className='profile__container'>
        <div className='profile__header'>
          <div className='profile__avatar-section'>
            <Avatar name={user.firstName} size='large' image={user.avatar} />
            <div className='profile__avatar-actions'>
              <Button title='Изменить фото' className='profile__avatar-btn' isSecondary />
            </div>
          </div>
          <div className='profile__info'>
            <h1 className='profile__name'>
              {user.firstName} {user.lastName}
            </h1>
            <p className='profile__email'>{user.email}</p>
            <p className='profile__status'>{user.status === 'active' ? 'Активный пользователь' : 'Неактивный пользователь'}</p>
            <div className='profile__stats'>
              <div className='profile__stat'>
                <span className='profile__stat-number'>{user.investments}</span>
                <span className='profile__stat-label'>Инвестиций</span>
              </div>
              <div className='profile__stat'>
                <span className='profile__stat-number'>${user.portfolio}</span>
                <span className='profile__stat-label'>Портфель</span>
              </div>
              <div className='profile__stat'>
                <span className='profile__stat-number'>+{user.profitability}%</span>
                <span className='profile__stat-label'>Доходность</span>
              </div>
            </div>
          </div>
        </div>

        <div className='profile__content'>
          <div className='profile__section'>
            <h2 className='profile__section-title'>Личная информация</h2>
            <div className='profile__form'>
              <div className='profile__form-row'>
                <div className='profile__form-group'>
                  <label className='profile__label'>Имя</label>
                  <input onChange={handleChange} value={user.firstName} name='firstName' type='text' className='profile__input' placeholder='Введите имя' />
                </div>
                <div className='profile__form-group'>
                  <label className='profile__label'>Фамилия</label>
                  <input onChange={handleChange} name='lastName' value={user.lastName} type='text' className='profile__input' placeholder='Введите фамилию' />
                </div>
              </div>
              <div className='profile__form-group'>
                <label className='profile__label'>Email</label>
                <input onChange={handleChange} name='email' value={user.email} type='email' className='profile__input' placeholder='Введите email' />
              </div>
              <div className='profile__form-group'>
                <label className='profile__label'>Телефон</label>
                <input type='tel' className='profile__input' name='phone' onChange={handleChange} value={user.phone} placeholder='Введите телефон' />
              </div>
              <div className='profile__form-group'>
                <label className='profile__label'>Дата рождения</label>
                <input type='date' className='profile__input' name='birthday' onChange={handleChange} value={user.birthday} />
              </div>
            </div>
          </div>

          <div className='profile__section'>
            <h2 className='profile__section-title'>Безопасность</h2>
            <div className='profile__security'>
              {isPasswordEditing ? (
                <div className='profile__form-group'>
                  <label className='profile__label'>Новый пароль</label>
                  <input type='password' className='profile__input' name='password' onChange={handleChange} value={user.password} />
                </div>
              ) : (
                <div className='profile__security-item'>
                  <div className='profile__security-info'>
                    <h3 className='profile__security-title'>Пароль</h3>
                    <p className='profile__security-description'>
                      Последнее изменение:{' '}
                      {fetchedUser.updatedAtPassword
                        ? new Date(fetchedUser.updatedAtPassword).toLocaleDateString() +
                          ' ' +
                          new Date(fetchedUser.updatedAtPassword).toLocaleTimeString('ru-RU', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })
                        : ''}
                    </p>
                  </div>
                  <Button onClick={handleChangePassword} title='Изменить' className='profile__security-btn' isSecondary />
                </div>
              )}

              <div className='profile__security-item profile__security-item--danger'>
                <div className='profile__security-info'>
                  <h3 className='profile__security-title profile__security-title--danger'>Удаление аккаунта</h3>
                  <p className='profile__security-description'>Это действие необратимо. После удаления аккаунта все ваши данные будут безвозвратно утеряны.</p>
                </div>
                <Button onClick={handleDeleteAccount} title='Удалить аккаунт' className='profile__delete-btn' isDanger />
              </div>
            </div>
          </div>

          <div className='profile__actions'>
            <Button onClick={handleSave} title='Сохранить изменения' className='profile__save-btn' />
            <Button title='Выйти' className='profile__logout-btn' isSecondary onClick={handleLogout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
