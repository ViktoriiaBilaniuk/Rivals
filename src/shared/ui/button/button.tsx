import React, { FC } from "react";

interface IButton {
  title: string;
  disabled?: boolean;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
}

export const Button: FC<IButton> = (props) => {
  const { title, Icon, disabled = false, onClick } = props;

  return (
    <button
      className="primary-btn"
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      <p>{title}</p>
      <span className="primary-btn__icon">{Icon && <Icon />}</span>
    </button>
  );
};
