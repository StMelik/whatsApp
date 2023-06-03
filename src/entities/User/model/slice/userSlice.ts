import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/UserSchema';
import { USER_API_LOCAL_STORAGE_KEY, USER_ID_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
import { initAuthData } from '../services/initAuthData';

const initialState: UserSchema = {
  _inited: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<User>) => {
      state.authData = payload;
    },

    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_ID_LOCAL_STORAGE_KEY);
      localStorage.removeItem(USER_API_LOCAL_STORAGE_KEY);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        initAuthData.fulfilled,
        (state, { payload }: PayloadAction<User>) => {
          state.authData = payload;
          state._inited = true;
        }
      )
      .addCase(initAuthData.rejected, (state) => {
        state._inited = true;
      });
  }
});

export const {
  actions: userActions,
  reducer: userReducer
} = userSlice;
