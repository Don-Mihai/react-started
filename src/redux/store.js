import { configureStore } from '@reduxjs/toolkit';
import counter from './Counter';
import user from './User';
import portfolio from './Portfolio';

export default configureStore({
  reducer: {
    counter,
    user,
    portfolio,
  },
});
