import { configureStore } from '@reduxjs/toolkit';
import counter from './Counter';

export default configureStore({
  reducer: {
    counter,
  },
});
