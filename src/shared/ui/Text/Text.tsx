import { memo } from 'react';
import cn from 'classnames';

import cls from './Text.module.scss';

type TextVariant = 'primary' | 'error';
type TextSize = 's' | 'm' | 'l' | 'xl';

interface TextProps {
  className?: string;
  text: string | null;
  variant?: TextVariant;
  size?: TextSize;
  bold?: boolean;
}

export const Text = memo((props: TextProps) => {
  const { className, text, variant = 'primary', size = 'l', bold } = props;

  const classes = [className, cls[variant], cls[size]];

  return <p className={cn(classes, { [cls.bold]: bold })}>{text}</p>;
});
