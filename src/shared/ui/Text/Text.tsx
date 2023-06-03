import cn from 'classnames';
import { memo } from 'react';
import cls from './Text.module.scss';

type TextVariant = 'primary' | 'error';
type TextSize = 's' | 'm' | 'l' | 'xl';
type TextAlign = 'left' | 'center' | 'right';

interface TextProps {
  className?: string;
  text?: string;
  variant?: TextVariant;
  size?: TextSize;
  bold?: boolean;
  align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
  const { className, text, variant = 'primary', size = 'l', bold, align = 'left' } = props;

  if (!text) return null;

  const classes = [className, cls[variant], cls[size], cls[align]];

  return <p className={cn(classes, { [cls.bold]: bold })}>{text}</p>;
});
