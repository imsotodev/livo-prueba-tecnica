import { useState, forwardRef } from "react";
import type { BaseInputProps } from "~/common/components/ui/input/base";
import Input from "~/common/components/ui/input/base";
import EyeSVG from "../../svg/EyeSVG";

const InputPassword = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ type, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
      <>
        <Input ref={ref} type={isVisible ? "text" : "password"} {...props} />
        <button
          type="button"
          className="input-password-btn"
          onClick={toggleVisibility}
        >
          <EyeSVG />
        </button>
      </>
    );
  }
);

export default InputPassword;
