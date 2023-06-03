import { useAuthDataSelector } from '@/entities/User';
import { LogoutButton } from '@/features/logoutButton';
import { Avatar } from '@/shared/ui/Avatar';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import cn from 'classnames';
import { memo } from 'react';
import cls from './SidebarHeader.module.scss';

interface SidebarHeaderProps {
  className?: string;
}

export const SidebarHeader = memo((props: SidebarHeaderProps) => {
  const { className } = props;

  const authData = useAuthDataSelector();

  return (
    <HStack
      gap='30'
      className={cn(cls.sidebarHeader, className)}
    >
      <Avatar />

      <Text
        className={cls.text}
        text={authData?.wid}
      />

      <LogoutButton className={cls.logoutButton} />
    </HStack>
  );
});
