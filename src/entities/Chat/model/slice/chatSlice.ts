import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IReturnMessage, getNotification } from '../services/getNotification';
import { ChatType, IChatSchema } from '../types/ChatSchema';
import { CHAT_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';

const initialState: IChatSchema = {
  items: [],
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
        id: chatId,
        phone: payload,
        messages: []
      });

      state.selectedChatId = chatId;

      localStorage.setItem(CHAT_LOCAL_STORAGE_KEY, JSON.stringify(state.items))
    },

    setSelectedChatId: (state, { payload }: PayloadAction<string>) => {
      state.selectedChatId = payload;
    },

    initItems: (state) => {
      const localItems = localStorage.getItem(CHAT_LOCAL_STORAGE_KEY)

      if (localItems) {
        state.items = JSON.parse(localItems) as ChatType[]
      }
    }
  },
  extraReducers: (builder) => {
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
