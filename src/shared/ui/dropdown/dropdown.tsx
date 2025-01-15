import "./dropdown.scss";
import clsx from "clsx";
import { FC } from "react";

interface IDropdown {
  isOpen?: boolean;
  labelElement: JSX.Element;
  content?: JSX.Element | JSX.Element[];
  className?: string;
}

export const Dropdown: FC<IDropdown> = (props) => {
  const { labelElement, content, isOpen = false, className } = props;

  let isOpenDropdown = isOpen ? "dropdown_open" : "dropdown_close";
  if (isOpen === undefined) {
    isOpenDropdown = "dropdown_opening-state_hover";
  }

  return (
    <div className={clsx("dropdown", isOpenDropdown, className)}>
      <div className="dropdown__label">{labelElement}</div>
      <div className="dropdown__wrapper">
        <div className="dropdown__content">{content}</div>
      </div>
    </div>
  );
};
