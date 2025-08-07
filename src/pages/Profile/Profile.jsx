import Header from '../../modules/Header/Header';
import Button from '../../components/Button/Button';
import Avatar from '../../components/Avatar/Avatar';
import './styles.scss';
import { LOCAL_STORAGE_USER } from '../../services/utils';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_USER);
    navigate('/');
  };

  return (
    <div className="profile">
      <Header />
      <div className="profile__container">
        <div className="profile__header">
          <div className="profile__avatar-section">
            <Avatar 
              name="Иван Петров" 
              size="large"
              image="/images/person.png"
            />
            <div className="profile__avatar-actions">
              <Button title="Изменить фото" className="profile__avatar-btn" isSecondary />
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Иван Петров</h1>
            <p className="profile__email">ivan.petrov@example.com</p>
            <p className="profile__status">Активный пользователь</p>
            <div className="profile__stats">
              <div className="profile__stat">
                <span className="profile__stat-number">12</span>
                <span className="profile__stat-label">Инвестиций</span>
              </div>
              <div className="profile__stat">
                <span className="profile__stat-number">$45,230</span>
                <span className="profile__stat-label">Портфель</span>
              </div>
              <div className="profile__stat">
                <span className="profile__stat-number">+18.5%</span>
                <span className="profile__stat-label">Доходность</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile__content">
          <div className="profile__section">
            <h2 className="profile__section-title">Личная информация</h2>
            <div className="profile__form">
              <div className="profile__form-row">
                <div className="profile__form-group">
                  <label className="profile__label">Имя</label>
                  <input 
                    type="text" 
                    className="profile__input" 
                    defaultValue="Иван"
                    placeholder="Введите имя"
                  />
                </div>
                <div className="profile__form-group">
                  <label className="profile__label">Фамилия</label>
                  <input 
                    type="text" 
                    className="profile__input" 
                    defaultValue="Петров"
                    placeholder="Введите фамилию"
                  />
                </div>
              </div>
              <div className="profile__form-group">
                <label className="profile__label">Email</label>
                <input 
                  type="email" 
                  className="profile__input" 
                  defaultValue="ivan.petrov@example.com"
                  placeholder="Введите email"
                />
              </div>
              <div className="profile__form-group">
                <label className="profile__label">Телефон</label>
                <input 
                  type="tel" 
                  className="profile__input" 
                  defaultValue="+7 (999) 123-45-67"
                  placeholder="Введите телефон"
                />
              </div>
              <div className="profile__form-group">
                <label className="profile__label">Дата рождения</label>
                <input 
                  type="date" 
                  className="profile__input" 
                  defaultValue="1990-05-15"
                />
              </div>
            </div>
          </div>

          <div className="profile__section">
            <h2 className="profile__section-title">Безопасность</h2>
            <div className="profile__security">
              <div className="profile__security-item">
                <div className="profile__security-info">
                  <h3 className="profile__security-title">Пароль</h3>
                  <p className="profile__security-description">Последнее изменение: 2 недели назад</p>
                </div>
                <Button title="Изменить" className="profile__security-btn" isSecondary />
              </div>
            </div>
          </div>

          <div className="profile__actions">
            <Button title="Сохранить изменения" className="profile__save-btn" />
            <Button title="Выйти" className="profile__logout-btn" isSecondary onClick={handleLogout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
