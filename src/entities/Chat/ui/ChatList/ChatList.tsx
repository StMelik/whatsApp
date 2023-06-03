import cn from 'classnames';
import { memo } from 'react';
import { useChatItemsSelector } from '../../model/selectors/chatSelector/chatSelector';
import { ChatCard } from '../ChatCard/ChatCard';
import cls from './ChatList.module.scss';

interface ChatListProps {
  className?: string;
}

export const ChatList = memo((props: ChatListProps) => {
  const { className } = props;

  const items = useChatItemsSelector();

  return (
    <ul className={cn(cls.chatList, className)}>
      {items.map((item) => (
        <ChatCard
          key={item.phone}
          item={item}
        />
      ))}
    </ul>
  );
});
