export interface IFormField {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string | number | boolean;
  className?: string;
  onValueChange: (value: any) => void;
}
