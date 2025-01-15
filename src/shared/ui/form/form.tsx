import { useState } from "react";
import React from "react";
import { IFormField } from "../../models/form-field.model";

type Props = {
  initialValue?: any;
  onSubmit: any;
  children: React.ReactElement<IFormField> | React.ReactElement<IFormField>[];
};

export default function Form({ initialValue, onSubmit, children }: Props) {
  const [formValue, setFormValue] = useState(initialValue || {});

  const handleFieldChange = (fieldName: string, value: any) => {
    setFormValue((prevValue: any) => ({ ...prevValue, [fieldName]: value }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formValue);
  };

  const renderChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        value: formValue[child.props.name],
        onValueChange: (value) => handleFieldChange(child.props.name, value),
      });
    }
    return child;
  });

  return (
    <form onSubmit={handleFormSubmit}>
      {renderChildren}
      <button type="submit">Submit</button>
    </form>
  );
}
