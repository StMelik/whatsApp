import { useChatPhoneSelector } from '@/entities/Chat';
import { Avatar } from '@/shared/ui/Avatar';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import cls from './ChatHeader.module.scss';

export const ChatHeader = () => {
  const chatPhone = useChatPhoneSelector();

  return (
    <HStack
      gap='20'
      className={cls.chatHeader}
      max
    >
      <Avatar />
      <Text
        text={chatPhone}
        bold
      />
    </HStack>
  );
};
