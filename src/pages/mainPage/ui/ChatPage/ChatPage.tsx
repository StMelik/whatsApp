import { ChatMessagesList, chatActions, getNotification, useSelectedChatIdSelector } from '@/entities/Chat';
import { AddMessageForm } from '@/features/AddMessageForm';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useKeyboardEvent } from '@/shared/hooks/useKeyboardEvent/useKeyboardEvent';
import { getVStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import cn from 'classnames';
import { useEffect } from 'react';
import { ChatHeader } from '../ChatHeader/ChatHeader';
import cls from './ChatPage.module.scss';

export const ChatPage = () => {
  const dispatch = useAppDispatch();

  const isActive = useSelectedChatIdSelector();

  useKeyboardEvent(
    'keydown',
    'Escape',
    () => {
      if (!isActive) return;

      dispatch(chatActions.setSelectedChatId(''));
    },
    [isActive]
  );

  useEffect(() => {
    dispatch(getNotification());
  }, []);

  const empty = (
    <Text
      className={cls.empty}
      text='Выберите или создайте чат для отправки сообщения'
      size='xl'
      align='center'
    />
  );

  const chat = (
    <>
      <ChatHeader />
      <ChatMessagesList />
      <AddMessageForm />
    </>
  );

  return (
    <section className={cn(cls.chatPage, getVStack({ max: true }))}>
      {isActive ? chat : empty}
    </section>
  );
};
