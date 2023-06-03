import { Text } from '@/shared/ui/Text';
import cn from 'classnames';
import { IChatMessageType } from '../../model/types/ChatSchema';
import cls from './ChatMessageCard.module.scss';

interface ChatMessageCardProps {
  className?: string;
  message: IChatMessageType;
}

export const ChatMessageCard = (props: ChatMessageCardProps) => {
  const { className, message } = props;

  return (
    <div
      className={cn(cls.chatMessageCard, className, {
        [cls.owner]: message.isOwner
      })}
    >
      <Text
        text={message.text}
        size='m'
      />
      <Text
        text={message.time}
        size='s'
        align='right'
      />
    </div>
  );
};
