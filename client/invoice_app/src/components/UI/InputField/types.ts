export type InputFieldProps = {
  label: string;
  value: string | number;
  type?: string;
  // eslint-disable-next-line
  onChangeFunc: (...args: any[]) => void;
};
