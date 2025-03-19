import { type ComponentProps, type FC } from "react";

type ButtonProps = ComponentProps<"button">;

const Button: FC<ButtonProps> = ({ ...props }) => {
  return (
    <button className="btn" {...props}>
      {props.children}
    </button>
  );
};

export default Button;
