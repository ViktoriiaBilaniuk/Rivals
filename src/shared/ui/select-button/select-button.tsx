import { ChangeEventHandler, FC, useState } from "react";
import "./select-button.scss";
import clsx from "clsx";

export interface SelectButtonOption {
  title: string;
  value: string;
}

interface ISelectButton {
  options: SelectButtonOption[];
  selectedOption?: string;
  onChange?: ChangeEventHandler<HTMLButtonElement>;
}

export const SelectButton: FC<ISelectButton> = (props) => {
  const { options, selectedOption, onChange } = props;
  const [activeButton, setActiveButton] = useState(selectedOption || "");

  return (
    <div className="select-button__wrapper">
      {options.map((option) => (
        <button
          key={option.value}
          className={clsx(
            "select-button",
            activeButton === option.value && "select-button_active"
          )}
          value={option.value}
          onClick={() => onChange ?? setActiveButton(option.value)}
        >
          {option.title}
        </button>
      ))}
    </div>
  );
};
