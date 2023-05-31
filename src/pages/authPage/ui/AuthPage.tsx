import cn from 'classnames';
import cls from './AuthPage.module.scss';
import { Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { useState } from 'react';

interface AuthPageProps {
  className?: string;
}

export const AuthPage = (props: AuthPageProps) => {
  const { className } = props;

  return (
    <div className={cn(cls.authPage, className)}>
      <Input
        label='IdInstance:'
        placeholder='3541680142'
      />

      <Input
        label='ApiTokenInstance:'
        placeholder='fr23jy0xc55b21dseacs0eytbvcvmgc93sf5dfcx2qqasd74tyh'
      />

      <Text text='Создать аккаунт можно на сайте https://green-api.com/' />
    </div>
  );
};
