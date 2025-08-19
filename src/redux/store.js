import { configureStore } from '@reduxjs/toolkit';
import counter from './Counter';
import user from './User';

export default configureStore({
  reducer: {
    counter,
    user,
  },
});
