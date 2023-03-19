import clsx from "clsx";
import type { Component, JSX } from "solid-js";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {}

const Layout: Component<Props> = (props) => {
  const { class: className, children, ...rest } = props;

  return (
    <div
      class={clsx("mx-auto max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Layout;
