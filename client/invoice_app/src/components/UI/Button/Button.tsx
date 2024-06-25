import { ButtonProps } from "./types";
import clsx from "clsx";

const Button = ({
  text,
  icon,
  bg_color,
  text_color,
  width,
  type,
  className,
  clickFunc,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        `flex items-center justify-center font-medium gap-2 h-12 rounded-full 
        ${icon ? "pl-2 pr-4" : "px-6"}`,
        bg_color,
        text_color,
        width,
        className
      )}
      type={type ? type : "button"}
      onClick={clickFunc}
    >
      {icon && (
        <div className="flex items-center justify-center w-[1.875rem] bg-white h-[1.875rem] rounded-full">
          <img src={icon} alt="" />
        </div>
      )}
      {text}
    </button>
  );
};

export default Button;
