import { InputHTMLAttributes } from "react";

export interface IFormField extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}
