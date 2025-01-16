import { ChangeEvent, FC, useState } from "react";
import { IFormField } from "../../models/form-field.model";

export const Input: FC<IFormField> = (props) => {
  const {
    value,
    onChange,
    onKeyDown,
    onBlur,
    onFocus,
    label,
    placeholder,
    name,
    className,
  } = props;

  const [inputValue, setInputValue] = useState<string>("");

  const onChangeInputData = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="form-field">
      {label && <label>{label}</label>}
      <input
        type="text"
        name={name}
        value={value ?? inputValue}
        className={className}
        placeholder={placeholder || ""}
        onChange={onChange ?? onChangeInputData}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </div>
  );
};
