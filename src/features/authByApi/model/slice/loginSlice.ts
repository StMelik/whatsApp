import { createSlice } from '@reduxjs/toolkit';
import { loginByApi } from '../services/loginByApi';
import { LoginSchema } from '../types/LoginSchema';

const initialState: LoginSchema = {
  isLoading: false,
  error: ''
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginByApi.pending, (state) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(loginByApi.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
