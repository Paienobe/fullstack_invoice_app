import { InputFieldProps } from "./types";
import clsx from "clsx";

const InputField = ({ label, value }: InputFieldProps) => {
  return (
    <div className="mb-4">
      <label className="font-light" htmlFor={label}>
        {label}
      </label>
      <input
        className={clsx(
          "block border h-[3.25rem] p-4 border-light_border rounded-md mt-1 w-full"
        )}
        value={value}
      />
    </div>
  );
};

export default InputField;
