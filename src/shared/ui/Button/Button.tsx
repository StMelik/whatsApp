import cn from 'classnames';
import { ButtonHTMLAttributes, FC, memo } from 'react';
import cls from './Button.module.scss';

type ButtonVariant = 'clear' | 'outline';
type ButtonSize = 'big' | 'normal';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = memo((props) => {
  const { className, variant = 'outline', children, size = 'normal', ...otherProps } = props;

  return (
    <button
      type='button'
      className={cn(cls.button, className, cls[variant], cls[size])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
