import clsx from "clsx";
import type { Component, JSX } from "solid-js";

type Props = JSX.HTMLAttributes<HTMLHeadingElement>;

const Heading: Component<Props> = (props) => {
  const { class: className, children, ...rest } = props;

  return (
    <h2 class={clsx("text-veryDarkBlue", className)} {...rest}>
      {children}
    </h2>
  );
};

export default Heading;
