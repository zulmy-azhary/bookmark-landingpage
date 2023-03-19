import clsx from "clsx";
import type { Component, JSX } from "solid-js";

interface Props extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {}

const NavItem: Component<Props> = (props) => {
  const { class: className, children, ...rest } = props;

  return (
    <a href="#" class={clsx("uppercase text-xs font-medium tracking-widest hover:text-softRed", className)} {...rest}>
      {children}
    </a>
  );
};

export default NavItem;
