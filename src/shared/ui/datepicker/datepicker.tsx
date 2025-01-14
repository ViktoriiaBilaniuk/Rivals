import "./datepicker.scss";
import { FC } from "react";
import { IFormField } from "../models/form-field.model";

export const Datepicker: FC<IFormField> = (props) => {
  const { label, placeholder, name, onValueChange, className } = props;

  return (
    <div className="form-field">
      {label && <label>{label}</label>}
      <input
        type="date"
        name={name}
        className={className}
        placeholder={placeholder || ""}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  );
};
