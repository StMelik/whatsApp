import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IDeleteNotificationResponse {
  result: boolean;
}

export const deleteNotification = createAsyncThunk<void, number, ThunkConfig<string>>(
  'chat/checkNotification',
  async (receiptId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      await extra.api.delete<IDeleteNotificationResponse>(`deleteNotification/${receiptId}`);
    } catch (error) {
      console.log('Ошибка при удалении уведомления');

      return rejectWithValue('Ошибка при удалении уведомления');
    }
  }
);
