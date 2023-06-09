import cn from 'classnames';
import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import { VStack } from '../Stack';
import { Text } from '../Text';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  label?: string;
  onChange?: (value: string) => void;
  width?: string | number;
}

export const Input = memo((props: InputProps) => {
  const { className, onChange, label, width, ...otherProps } = props;

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const input = (
    <input
      style={{ maxWidth: width }}
      className={cn(cls.input, className)}
      onChange={handleChangeInput}
      {...otherProps}
    />
  );

  if (label) {
    return (
      <VStack
        gap='10'
        max
      >
        <Text text={label} />
        {input}
      </VStack>
    );
  }

  return input;
});
