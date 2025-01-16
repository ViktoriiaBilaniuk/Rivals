import clsx from "clsx";
import React, { FC } from "react";

interface IButton {
  title: string;
  disabled?: boolean;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  theme?: "yellow" | "white";
  className?: string;
  onClick?: () => void;
}

export const Button: FC<IButton> = (props) => {
  const {
    title,
    Icon,
    disabled = true,
    onClick,
    theme = "yellow",
    className,
  } = props;

  return (
    <button
      className={clsx(
        "btn",
        `btn_theme_${theme}`,
        disabled && "btn_disabled",
        className
      )}
      type="button"
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
