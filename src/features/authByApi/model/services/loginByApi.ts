import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';
import { USER_API_LOCAL_STORAGE_KEY, USER_ID_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IAuthData {
  userId: string;
  userApi: string;
}

export const loginByApi = createAsyncThunk<void, IAuthData, ThunkConfig<string>>(
  'login/loginByApi',
  async (authData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    const { userId, userApi } = authData;

    try {
      const response = await extra.api.get(`/waInstance${userId}/getSettings/${userApi}`);

      if (!response.data) {
        console.log('Произошла ошибка при попытке войти в аккаунт');
        
        return rejectWithValue('error');
      }

      const authData: User = {
        wid: response.data.wid.split('@')[0]
      };

      dispatch(userActions.setAuthData(authData));

      localStorage.setItem(USER_ID_LOCAL_STORAGE_KEY, userId);
      localStorage.setItem(USER_API_LOCAL_STORAGE_KEY, userApi);
    } catch (e) {
      console.log('Произошла ошибка при попытке войти в аккаунт', e);

      return rejectWithValue('error');
    }
  }
);
