import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectedChatIdSelector } from '../selectors/chatSelector/chatSelector';
import { IChatMessageType } from '../types/ChatSchema';

interface IResponseType {
  idMessage: string;
}

export interface IReturnSendMessage {
  message: IChatMessageType;
  chatId: string;
}

export const sendMessage = createAsyncThunk<void, string, ThunkConfig<string>>(
  'chat/sendMessage',
  async (textMessage, thunkApi) => {
    const { rejectWithValue, extra, getState } = thunkApi;

    const chatId = selectedChatIdSelector(getState())

    try {
      const { data } = await extra.api.post<IResponseType>('sendMessage', {
        message: textMessage,
        chatId
      });

      if (!data) {
        return rejectWithValue('Ошибка при отправке сообщения');
      }
    } catch (error) {
      return rejectWithValue('Ошибка при отправке сообщения');
    }
  }
);
