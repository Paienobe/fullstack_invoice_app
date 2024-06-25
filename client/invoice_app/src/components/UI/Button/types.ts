export type ButtonProps = {
  text: string;
  icon?: string;
  bg_color: string;
  text_color: string;
  width?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  clickFunc?: () => void;
};
