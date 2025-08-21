import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../services/api';

const URL = `${API_URL}/portfolios`;

export const fetchPortfolios = createAsyncThunk('portfolio/fetchPortfolios', async () => {
  const fetchedPortfolios = (await axios.get(URL)).data;
  return fetchedPortfolios;
});

export const addPortfolio = createAsyncThunk('portfolio/addPortfolio', async (formData) => {
  // Создание нового портфеля
  const newPortfolio = {
    ...formData,
    totalValue: parseFloat(formData.totalValue),
    createdAt: new Date().toISOString().split('T')[0],
    assets: [],
  };
  const addedPortfolio = (await axios.post(URL, newPortfolio)).data;
  return addedPortfolio;
});

export const updatePortfolio = createAsyncThunk('portfolio/updatePortfolio', async (portfolio) => {
  const updatedPortfolio = (await axios.put(`${URL}/${portfolio.id}`, portfolio)).data;
  return updatedPortfolio;
});

export const deletePortfolio = createAsyncThunk('portfolio/deletePortfolio', async (id) => {
  await axios.delete(`${URL}/${id}`);
  return id;
});

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    portfolios: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolios.fulfilled, (state, action) => {
        state.portfolios = action.payload;
      })
      .addCase(addPortfolio.fulfilled, (state, action) => {
        state.portfolios.push(action.payload);
      })
      .addCase(updatePortfolio.fulfilled, (state, action) => {
        const updatedPortfolio = action.payload;
        state.portfolios = state.portfolios.map((portfolio) => (portfolio.id === updatedPortfolio.id ? updatedPortfolio : portfolio));
      })
      .addCase(deletePortfolio.fulfilled, (state, action) => {
        state.portfolios = state.portfolios.filter((portfolio) => portfolio.id !== action.payload);
      });
  },
});

export const {} = portfolioSlice.actions;

export default portfolioSlice.reducer;
