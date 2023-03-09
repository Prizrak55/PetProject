import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme{
  PRIMARY = 'primary',
  ERROR = 'error',
}
export enum TextAling {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

interface TextProps {
  className?: string;
  title?:string;
  text?: string;
  theme?: TextTheme;
  align?: TextAling;
}

export const Text = memo((props:TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAling.LEFT,
  } = props;

  return (
    <div className={classNames(cls.text, {}, [className, cls[theme], cls[align]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
