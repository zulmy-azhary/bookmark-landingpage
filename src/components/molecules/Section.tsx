import clsx from "clsx";
import type { Component, JSX } from "solid-js";

interface Props extends JSX.HTMLAttributes<HTMLElement> {}

const Section: Component<Props> = (props) => {
  const { class: className, children, ...rest } = props;

  return (
    <section
      class={clsx("", className)}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;
