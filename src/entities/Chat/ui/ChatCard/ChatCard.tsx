import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import cn from 'classnames';
import { memo, useCallback } from 'react';
import { useSelectedChatIdSelector } from '../../model/selectors/chatSelector/chatSelector';
import { chatActions } from '../../model/slice/chatSlice';
import { ChatType } from '../../model/types/ChatSchema';
import cls from './ChatCard.module.scss';

interface ChatCardProps {
  className?: string;
  item: ChatType;
}

export const ChatCard = memo((props: ChatCardProps) => {
  const { item, className } = props;

  const dispatch = useAppDispatch();

  const selectedChatId = useSelectedChatIdSelector();

  const handleSelectChat = useCallback(
    (id: string) => () => {
      if (id === selectedChatId) return;

      dispatch(chatActions.setSelectedChatId(id));
    },
    [selectedChatId]
  );

  return (
    <HStack
      gap='20'
      onClick={handleSelectChat(item.id)}
      className={cn(cls.chatCard, className, {
        [cls.active]: item.id === selectedChatId
      })}
    >
      <Avatar size={50} />
      <Text
        className={cls.text}
        text={item.phone}
      />
    </HStack>
  );
});
