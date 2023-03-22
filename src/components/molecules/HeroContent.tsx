import type { Component, JSX } from "solid-js";
import { Button, Description, Heading } from "../atoms";
import clsx from "clsx";

type Props = JSX.HTMLAttributes<HTMLDivElement>;

const HeroContent: Component<Props> = (props) => {
  const { class: className, ...rest } = props;
  return (
    <div class={clsx("flex flex-col gap-y-6 px-8 md:px-12 lg:px-0 lg:pl-16 xl:pl-32", className)} {...rest}>
      <Heading class="text-center text-3xl md:text-4xl lg:text-start lg:text-5xl font-medium">A Simple Bookmark Manager</Heading>
      <Description class="lg:text-start">
        A clean and simple interface to organize your favourite websites. Open a new browser tab and
        see your sites load instantly. Try it for free.
      </Description>
      <div class="flex justify-center items-center gap-x-4 lg:justify-start">
        <Button variant="Primary">Get it on Chrome</Button>
        <Button variant="Accent">Get it on Firefox</Button>
      </div>
    </div>
  );
};

export default HeroContent;
