import clsx from "clsx";
import { Component, JSX } from "solid-js";

type Props = JSX.HTMLAttributes<HTMLParagraphElement>;

const Description: Component<Props> = (props) => {
  const { class: className, children, ...rest } = props;

  return (
    <p class={clsx("text-center text-grayishBlue", className)} {...rest}>
      {children}
    </p>
  );
};

export default Description;
