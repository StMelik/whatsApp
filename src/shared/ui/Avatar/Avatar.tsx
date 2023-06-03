import cn from 'classnames';
import { CSSProperties, useMemo } from 'react';
import UserIcon from '../../assets/icons/avatar.svg';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, alt = 'Аватар', size = 40 } = props;

  const style = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size
    }),
    [size]
  );

  if (!src) {
    return (
      <UserIcon
        className={className}
        style={style}
      />
    );
  }

  return (
    <img
      className={cn(cls.avatar, className)}
      src={src}
      alt={alt}
      style={style}
    />
  );
};
