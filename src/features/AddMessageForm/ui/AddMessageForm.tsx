import { sendMessage } from '@/entities/Chat';
import SendIcon from '@/shared/assets/icons/send.svg';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { getHStack } from '@/shared/ui/Stack';
import cn from 'classnames';
import { FormEvent, useState } from 'react';
import cls from './AddMessageForm.module.scss';

interface AddMessageFormProps {
  className?: string;
}

export const AddMessageForm = (props: AddMessageFormProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const [message, setMessage] = useState('');

  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;

    dispatch(sendMessage(message));
    setMessage('');
  };

  return (
    <form
      className={cn(cls.chatFooter, className, getHStack({ gap: '20', max: true }))}
      onSubmit={handleSendMessage}
    >
      <Input
        placeholder='Введите сообщение'
        value={message}
        onChange={setMessage}
      />

      <Button
        variant='clear'
        type='submit'
      >
        <SendIcon
          width={30}
          height={30}
        />
      </Button>
    </form>
  );
};
