import clsx from "clsx";
import type { Component, JSX } from "solid-js";

interface Props extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "Primary" | "Secondary" | "Accent";
}

const Button: Component<Props> = (props) => {
  const { children = "Default Text", variant, class: className, ...rest } = props;

  return (
    <button
      class={clsx(
        "px-4 lg:px-8 py-[10px] rounded-md border-2 font-rubik text-sm shadow-md font-medium hover:bg-white w-fit",
        variant === "Primary" && "border-softBlue bg-softBlue text-white hover:text-softBlue",
        variant === "Secondary" && "border-softRed bg-softRed text-white hover:text-softRed",
        variant === "Accent" && "border-gray-100 bg-gray-100 text-gray-600 hover:border-gray-600",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
