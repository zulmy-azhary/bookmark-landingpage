import { Component, JSX } from "solid-js"
import clsx from "clsx";
import { Shape } from "../atoms";

type Props = JSX.HTMLAttributes<HTMLDivElement>;

const HeroImage: Component<Props> = (props) => {
  const { class: className, ...rest } = props;
  return (
    <div class={clsx("relative w-full grid place-items-center px-3", className)} {...rest}>
      <img
        src={"/assets/images/illustration-hero.svg"}
        alt="Illustration Hero"
        class="h-64 md:h-96 lg:h-fit object-contain"
      />
      <Shape position="right" />
    </div>
  );
}

export default HeroImage