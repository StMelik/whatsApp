import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../types/UserSchema';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>('user/initAuthData', async (_, thunkApi) => {
  const { rejectWithValue, extra } = thunkApi;

  try {
    const response = await extra.api.get('getSettings');

    if (!response.data) {
      console.log('Произошла ошибка при инициализации профиля');

      return rejectWithValue('error');
    }

    return {
      wid: response.data.wid.split('@')[0]
    };
  } catch (error) {
    console.log('Произошла ошибка при инициализации профиля', error);
  
    return rejectWithValue('error');
  }
});
