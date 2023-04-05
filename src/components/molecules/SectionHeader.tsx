import type { Component, JSX } from "solid-js";
import { Description, Heading } from "../atoms";
import clsx from "clsx";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
  heading: string;
  description: string;
}

const SectionHeader: Component<Props> = (props) => {
  const { class: className, heading, description, ...rest } = props;
  return (
    <div class={clsx("flex flex-col gap-y-4 text-center", className)} {...rest}>
      <Heading class="text-2xl lg:text-3xl font-semibold lg:font-medium xl:font-semibold">
        {heading}
      </Heading>
      <Description class="text-sm md:text-base max-w-[18rem] md:max-w-2xl mx-auto xl:text-lg xl:max-w-[33rem]">
        {description}
      </Description>
    </div>
  );
};

export default SectionHeader;
