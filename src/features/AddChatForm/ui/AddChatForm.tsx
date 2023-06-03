import { chatActions } from '@/entities/Chat';
import AddChatIcon from '@/shared/assets/icons/add-chat.svg';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { getHStack } from '@/shared/ui/Stack';
import cn from 'classnames';
import { FormEvent, memo, useCallback, useState } from 'react';
import cls from './AddChatForm.module.scss';

interface AddChatFormProps {
  className?: string;
}

export const AddChatForm = memo((props: AddChatFormProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const [value, setValue] = useState('');

  const isValidValue = value && value.length > 1;

  const handleAddChat = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!isValidValue) return;

      dispatch(chatActions.addChat(value));
      setValue('');
    },
    [value]
  );

  return (
    <form
      className={cn(cls.addChatForm, className, getHStack({ gap: '20' }))}
      onSubmit={handleAddChat}
    >
      <Input
        placeholder='79991237755'
        value={value}
        onChange={setValue}
        type='number'
      />

      <Button
        variant='clear'
        type='submit'
        disabled={!isValidValue}
      >
        <AddChatIcon
          width={30}
          height={30}
        />
      </Button>
    </form>
  );
});
