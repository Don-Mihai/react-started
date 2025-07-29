import Header from '../../modules/Header/Header';
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
      Profile
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
};

export default Profile;
