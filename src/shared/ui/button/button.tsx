import clsx from 'clsx';
import React, { FC } from 'react';

interface IButton {
  title: string;
  disabled?: boolean;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  theme?: 'yellow' | 'white';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<IButton> = (props) => {
  const {
    title,
    Icon,
    disabled = true,
    onClick,
    theme = 'yellow',
    className,
    type = 'button'
  } = props;

  return (
    <button
      className={clsx(
        'btn',
        `btn_theme_${theme}`,
        disabled && 'btn_disabled',
        className
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <p className="btn__text">{title}</p>
      {Icon && (
        <span className="btn__icon">
          <Icon />
        </span>
      )}
    </button>
  );
};
