import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import cn from 'classnames';
import { useCallback, useState } from 'react';
import { useErrorSelector, useIsLoadingSelector } from '../../model/selectors/loginDataSelector/loginDataSelector';
import { loginByApi } from '../../model/services/loginByApi';

interface AuthFormProps {
  className?: string;
}

export const AuthForm = (props: AuthFormProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const [idValue, setIdValue] = useState('');
  const [apiValue, setApiValue] = useState('');

  const isLoading = useIsLoadingSelector();
  const error = useErrorSelector();

  const handleLoginClick = useCallback(() => {
    dispatch(loginByApi({ userApi: apiValue, userId: idValue }));
  }, [apiValue, idValue]);

  return (
    <VStack
      className={cn(className)}
      gap='30'
    >
      <Input
        value={idValue}
        type='number'
        onChange={setIdValue}
        width={250}
        label='IdInstance:'
        placeholder='3541680142'
        disabled={isLoading}
      />

      <Input
        value={apiValue}
        onChange={setApiValue}
        width={650}
        label='ApiTokenInstance:'
        placeholder='fr23jy0xc55b21dseacs0eytbvcvmgc93sf5dfcx2qqasd74tyh'
        disabled={isLoading}
      />

      <VStack
        gap='5'
        align='center'
        max
      >
        <Button
          size='big'
          onClick={handleLoginClick}
          disabled={isLoading}
        >
          Авторизоваться
        </Button>

        {error && (
          <Text
            variant='error'
            text='Ошибка авторизации. Проверьте введенные данные и повторите попытку.'
            size='m'
          />
        )}
      </VStack>
    </VStack>
  );
};
