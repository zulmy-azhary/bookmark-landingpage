import type { Component, JSX } from "solid-js";
import { Logo } from "../atoms";

type Props = JSX.AnchorHTMLAttributes<HTMLAnchorElement>;

const BrandLogo: Component<Props> = (props) => {
  const { class: className, ...rest } = props;
  return (
    <a href="/" class={className} {...rest}>
      <Logo class="cursor-pointer" />
    </a>
  );
};

export default BrandLogo;
