import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IDeleteNotificationResponse {
  result: boolean;
}

export const addChat = createAsyncThunk<void, number, ThunkConfig<string>>('chat/addChat', async (phone, thunkApi) => {
  const { rejectWithValue, extra } = thunkApi;

  // addChat: (state, { payload }: PayloadAction<string>) => {
  //   const chatId = `${payload}@c.us`;

  //   state.selectedChatId = chatId;
  // },

    const chatId = `${payload}@c.us`;


  return {
    id: payload,
    phone,
    messages: []
  };
});
