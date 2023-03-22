import clsx from "clsx";
import { Component, JSX } from "solid-js";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
  position: "left" | "right";
}

const Shape: Component<Props> = (props) => {
  const { class: className, position, ...rest } = props;
  return (
    <div
      class={clsx(
        "absolute h-2/3 w-3/5 lg:w-[27.5rem] bg-softBlue bottom-0 -z-10",
        position === "left" ? "left-0 rounded-r-full" : "right-0 rounded-l-full"
      )}
      {...rest}
    />
  );
};

export default Shape;
