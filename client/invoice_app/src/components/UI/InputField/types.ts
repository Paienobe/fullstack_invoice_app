export type InputFieldProps = {
  label: string;
  value: string | number;
  type?: string;
  className?: string;
  // eslint-disable-next-line
  onChangeFunc: (...args: any[]) => void;
};
