import { ThunkConfig } from '@/app/providers/StoreProvider';
import { authDataSelector } from '@/entities/User';
import { formatDate } from '@/shared/lib/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { isMessageNotification, isOutgoingMessageNotification } from '../../lib/checkNotification/checkNotification';
import { IChatMessageType } from '../types/ChatSchema';
import { deleteNotification } from './deleteNotification';

interface IReceiveNotificationResponse {
  receiptId: number;
  body: any;
}

interface IDeleteNotificationResponse {
  result: boolean;
}

export interface IReturnMessage {
  message: IChatMessageType;
  chatId: string;
}

export const getNotification = createAsyncThunk<IReturnMessage | undefined, void, ThunkConfig<string>>(
  'chat/getNotification',
  async (_, thunkApi) => {
    const { rejectWithValue, extra, getState, dispatch } = thunkApi;

    const isAuth = authDataSelector(getState());

    if (!isAuth) return;

    try {
      const { data: receiveNotificationData } = await extra.api.get<IReceiveNotificationResponse>('receiveNotification');

      // Если нет уведомлений отправляем повторный запрос
      if (!receiveNotificationData) {
        dispatch(getNotification());
        return;
      }

      const receiveNotificationBody = receiveNotificationData.body;

      const typeWebhook = receiveNotificationBody.typeWebhook;
      const receiptId = receiveNotificationData.receiptId;

      // Уведомление о новом сообщении
      if (isMessageNotification(typeWebhook)) {
        const messageData = receiveNotificationBody.messageData;

        const text = messageData?.textMessageData?.textMessage || messageData?.extendedTextMessageData?.text || '';

        const message: IChatMessageType = {
          id: receiveNotificationBody.idMessage,
          isOwner: isOutgoingMessageNotification(typeWebhook),
          time: formatDate(receiveNotificationBody.timestamp),
          text
        };

        await dispatch(deleteNotification(receiptId));
        dispatch(getNotification());

        return {
          chatId: receiveNotificationBody.senderData.chatId,
          message
        };
      }

      await dispatch(deleteNotification(receiptId));
      dispatch(getNotification());

      return;
    } catch (error) {
      console.log('Ошибка при получении уведомления', error);

      return rejectWithValue('Ошибка при получении уведомления');
    }
  }
);
