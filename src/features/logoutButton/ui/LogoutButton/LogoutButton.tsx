import { userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { useCallback } from 'react';

interface LogoutButtonProps {
  className?: string;
}

export const LogoutButton = (props: LogoutButtonProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, []);

  return (
    <Button
      className={className}
      variant='clear'
      onClick={handleLogout}
    >
      Выйти
    </Button>
  );
};
