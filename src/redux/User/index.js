import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_USER } from '../../services/utils';
import axios from 'axios';
import { API_URL } from '../../services/api';
import { initialUser } from './utils';

const URL = `${API_URL}/users`;

export const fetchUser = createAsyncThunk('user/fetchUser', async (_, { getState }) => {
  const userId = getState().user.userId;

  if (!userId) {
    return null;
  }
  try {
    const response = await axios.get(`${URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
});

export const deleteUser = createAsyncThunk('user/deleteUser', async (userId) => {
  const response = await axios.delete(`${URL}/${userId}`);
  return response.data;
});

export const updateUser = createAsyncThunk('user/updateUser', async (user, { getState }) => {
  let payload = { ...user };
  const oldUser = getState().user.user;
  if (user.password !== oldUser.password) {
    payload.updatedAtPassword = new Date().toISOString();
  }
  const response = await axios.put(`${URL}/${user.id}`, payload);
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: initialUser,
    userId: localStorage.getItem(LOCAL_STORAGE_USER) || '',
  },
  reducers: {
    setUserId: (state, action) => {
      localStorage.setItem(LOCAL_STORAGE_USER, action.payload);
      state.userId = action.payload;
    },
    clearUser: (state) => {
      localStorage.removeItem(LOCAL_STORAGE_USER);
      state.userId = '';
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { setUserId, clearUser } = userSlice.actions;

export default userSlice.reducer;
