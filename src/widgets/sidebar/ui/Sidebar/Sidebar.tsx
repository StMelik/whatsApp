import { ChatList } from '@/entities/Chat';
import { AddChatForm } from '@/features/AddChatForm';
import cn from 'classnames';
import { memo } from 'react';
import { SidebarHeader } from '../SidebarHeader/SidebarHeader';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;

  return (
    <section className={cn(cls.sidebar, className)}>
      <SidebarHeader />

      <ChatList />

      <AddChatForm className={cls.footer} />
    </section>
  );
});
