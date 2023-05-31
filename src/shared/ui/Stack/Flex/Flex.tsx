import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '10' | '16' | '24' | '32';
export type FlexWrap = 'nowrap' | 'wrap';

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  wrap?: FlexWrap;
  gap?: FlexGap;
  max?: boolean;
}

export type FlexParams = Pick<
  FlexProps,
  'justify' | 'align' | 'direction' | 'gap' | 'max' | 'wrap'
>;

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  10: cls.gap10,
  16: cls.gap16,
  24: cls.gap24,
  32: cls.gap32
};

export const getFlex = (params: FlexParams): string =>
  cn(
    cls.flex,
    {
      [cls.max]: params.max
    },
    [
      params.justify && justifyClasses[params.justify],
      params.align && alignClasses[params.align],
      params.direction && directionClasses[params.direction],
      params.gap && gapClasses[params.gap],
      params.wrap && cls[params.wrap]
    ]
  );

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    wrap = 'nowrap',
    gap,
    max,
    ...otherProps
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
    cls[wrap]
  ];

  const mods = {
    [cls.max]: max
  };

  return (
    <div
      className={cn(cls.flex, mods, classes)}
      {...otherProps}
    >
      {children}
    </div>
  );
};
