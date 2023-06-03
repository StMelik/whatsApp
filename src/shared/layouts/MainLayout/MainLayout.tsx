import cn from 'classnames';
import { memo, ReactElement } from 'react';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
  className?: string;
  content: ReactElement;
  sidebar: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { className, content, sidebar } = props;

  return (
    <div className={cn(cls.mainLayout, {}, [className])}>
      <div className={cls.sidebar}>{sidebar}</div>
      <div className={cls.content}>{content}</div>
    </div>
  );
});
