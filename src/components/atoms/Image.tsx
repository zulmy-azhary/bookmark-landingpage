import type { Component, JSX } from "solid-js";
import clsx from "clsx";

type Props = JSX.ImgHTMLAttributes<HTMLImageElement>;

const Image: Component<Props> = (props) => {
  const { class: className, ...rest } = props;
  return <img class={clsx("w-6 h-auto object-contain cursor-pointer", className)} {...rest} />;
};

export default Image;
