import { Outlet } from 'react-router-dom';
import Header from '../../modules/Header/Header';

const Wrapper = ({}) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Wrapper;
