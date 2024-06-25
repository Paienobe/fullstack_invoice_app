import { InputFieldProps } from "./types";
import clsx from "clsx";

const InputField = ({
  label,
  value,
  type,
  className,
  onChangeFunc,
}: InputFieldProps) => {
  return (
    <div className={clsx("mb-4", className)}>
      <label className="font-light" htmlFor={label}>
        {label}
      </label>
      <input
        className={clsx(
          "block border h-[3.25rem] text-text_dark p-4 border-light_border rounded-md mt-1 w-full focus:outline-purple"
        )}
        type={type ? type : "text"}
        value={value}
        onChange={onChangeFunc}
        required
      />
    </div>
  );
};

export default InputField;
