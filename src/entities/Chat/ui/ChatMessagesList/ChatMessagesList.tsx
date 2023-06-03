import { Loader } from '@/shared/ui/Loader';
import { getVStack } from '@/shared/ui/Stack';
import { Flex } from '@/shared/ui/Stack/Flex/Flex';
import { Text } from '@/shared/ui/Text';
import cn from 'classnames';
import { memo, useEffect, useRef } from 'react';
import { useChatIsLoadingSelector, useChatMessagesSelector } from '../../model/selectors/chatSelector/chatSelector';
import { ChatMessageCard } from '../ChatMessageCard/ChatMessageCard';
import cls from './ChatMessagesList.module.scss';

interface ChatMessagesListProps {
  className?: string;
}

export const ChatMessagesList = memo((props: ChatMessagesListProps) => {
  const { className } = props;

  const chatRef = useRef<HTMLUListElement>(null);

  const messages = useChatMessagesSelector();
  const isLoading = useChatIsLoadingSelector();

  // Скроллим список сообщений в конец
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current?.scrollHeight
    });
  });

  if (isLoading) {
    return (
      <Flex
        justify='center'
        className={cls.chatMessagesList}
      >
        <Loader />
      </Flex>
    );
  }

  if (!messages.length) {
    return (
      <Flex
        className={cls.chatMessagesList}
        justify='center'
      >
        <Text
          className={cls.empty}
          text='Нет сообщений'
          size='xl'
        />
      </Flex>
    );
  }

  return (
    <ul
      className={cn(cls.chatMessagesList, className, getVStack({ gap: '5', max: true }))}
      ref={chatRef}
    >
      {messages.map((message) => (
        <ChatMessageCard
          className={cn(cls.message, { [cls.owner]: message.isOwner })}
          key={message.id}
          message={message}
        />
      ))}
    </ul>
  );
});
