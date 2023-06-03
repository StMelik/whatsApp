import { ThunkConfig } from '@/app/providers/StoreProvider';
import { formatDate } from '@/shared/lib/formatDate/formatDate';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ChatMessageType, IChatMessageType } from '../types/ChatSchema';

interface IResponseType {
  type: string;
  timestamp: number;
  idMessage: string;
  textMessage: string;
}

export interface IReturnChatHistory {
  messages: IChatMessageType[];
  chatId: string;
}

export const getChatHistoryById = createAsyncThunk<IReturnChatHistory, string, ThunkConfig<string>>(
  'chat/getChatHistoryById',
  async (chatId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      const { data } = await extra.api.post<IResponseType[]>('getChatHistory', {
        count: 30,
        chatId
      });

      if (!data) {
        return rejectWithValue('error');
      }

      const messages = data.map((message) => ({
        id: message.idMessage,
        text: message.textMessage,
        time: formatDate(message.timestamp),
        isOwner: message.type === ChatMessageType.outgoing
      }));

      return {
        messages,
        chatId
      }
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
