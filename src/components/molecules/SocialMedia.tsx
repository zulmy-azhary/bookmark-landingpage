import type { Component, JSX } from "solid-js";
import Image from "../atoms/Image";
import clsx from "clsx";

type Props = JSX.HTMLAttributes<HTMLDivElement>;

const SocialMedia: Component<Props> = (props) => {
  const { class: className, ...rest } = props;
  return (
    <div class={clsx("flex items-center gap-x-10", className)} {...rest}>
      <a href="#">
        <Image src="/assets/images/icon-facebook.svg" alt="Facebook icon" />
      </a>
      <a href="#">
        <Image src="/assets/images/icon-twitter.svg" alt="Twitter icon" />
      </a>
    </div>
  );
};

export default SocialMedia;
