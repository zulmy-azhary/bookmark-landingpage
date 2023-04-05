import clsx from "clsx";
import type { Component, JSX } from "solid-js";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {}

const Layout: Component<Props> = (props) => {
  const { class: className, children, ...rest } = props;

  return (
    <div
      class={clsx("flex flex-col", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Layout;
