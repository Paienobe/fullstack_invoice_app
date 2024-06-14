import { ButtonProps } from "./types";

const Button = ({
  text,
  icon,
  bg_color,
  text_color,
  clickFunc,
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 h-12 rounded-full 
        ${icon ? "pl-2 pr-4" : "px-6"} bg-${bg_color} text-white`}
      style={{ color: text_color }}
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
