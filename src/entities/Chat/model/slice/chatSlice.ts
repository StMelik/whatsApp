import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IChatMessageType, IChatSchema } from '../types/ChatSchema';
import { IReturnChatHistory, getChatHistoryById } from '../services/getChatHistoryById';
import { IReturnSendMessage, sendMessage } from '../services/sendMessage';
import { IReturnMessage, getNotification } from '../services/getNotification';

const initialState: IChatSchema = {
  items: [
    // {
    //   id: '79996359290@c.us',
    //   phone: '79996359290',
    //   messages: []
    // },
    // {
    //   id: '79667666050@c.us',
    //   phone: '79667666050',
    //   messages: []
    // }
  ],
  isLoading: false,
  error: '',
  selectedChatId: ''
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChat: (state, { payload }: PayloadAction<string>) => {
      const chatId = `${payload}@c.us`;

      state.items.push({
        id: payload,
        phone: payload,
        messages: []
      });

      state.selectedChatId = chatId;
    },

    setSelectedChatId: (state, { payload }: PayloadAction<string>) => {
      state.selectedChatId = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChatHistoryById.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getChatHistoryById.fulfilled, (state, { payload }: PayloadAction<IReturnChatHistory>) => {
        state.isLoading = false;
        state.error = '';

        state.items.find(({ id }) => id === payload.chatId)!.messages = payload.messages.reverse()
      })
      .addCase(getChatHistoryById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });

      builder
      .addCase(getNotification.fulfilled, (state, { payload }: PayloadAction<IReturnMessage | undefined>) => {
        if (!payload) return

        const chat = state.items.find(({ id }) => id === payload.chatId)

        if (chat) {
          chat.messages.push(payload.message)
          return;
        }

        state.items.push({
          id: payload.chatId,
          messages: [payload.message],
          phone: payload.chatId.split('@')[0]
        });
      })
  }
});

export const { actions: chatActions, reducer: chatReducer } = chatSlice;
