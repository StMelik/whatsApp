import { AuthForm } from '@/features/authByApi';
import cls from './AuthPage.module.scss';

export const AuthPage = () => {
  return (
    <div className={cls.authPage}>
      <AuthForm className={cls.authForm} />
    </div>
  );
};
