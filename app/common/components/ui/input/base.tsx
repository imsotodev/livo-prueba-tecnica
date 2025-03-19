import { forwardRef, type ComponentProps } from "react";

export type BaseInputProps = ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, BaseInputProps>((props, ref) => {
  return <input className="input" ref={ref} {...props} />;
});

export default Input;
