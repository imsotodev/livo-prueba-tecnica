import { forwardRef, type ComponentType } from "react";
import { type FieldError } from "react-hook-form";
import Input, { type BaseInputProps } from "~/common/components/ui/input/base";
import InputPassword from "~/common/components/ui/input/password";

type InputProps = BaseInputProps & {
  label?: string;
  errors?: FieldError;
};

const InputRender: Record<string, ComponentType<BaseInputProps>> = {
  password: InputPassword,
  default: Input,
};

const InputGroup = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errors, ...props }, ref) => {
    const RenderInput =
      InputRender[props.type ?? "default"] || InputRender.default;

    const bottomMessageClass = `${errors?.message ? "text-red-500" : ""} h-5`;
    const bottomMessage = errors?.message ?? "";
    return (
      <div className="flex flex-col">
        <label className="input-label ml-3" htmlFor={props.id}>
          {label}
        </label>
        <div className="input-group">
          <RenderInput ref={ref} {...props} />
        </div>
        <small className={bottomMessageClass}>{bottomMessage}</small>
      </div>
    );
  }
);

export default InputGroup;
