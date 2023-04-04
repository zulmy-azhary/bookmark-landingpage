import type { Accessor, Component, JSX } from "solid-js";
import type { Feature } from "../../types";
import clsx from "clsx";
import { Button, Description, Heading } from "../atoms";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
  selectedFeature: Accessor<Omit<Feature, "name" | "image">>;
}

const FeatureContent: Component<Props> = (props) => {
  const { selectedFeature, class: className, ...rest } = props;

  return (
    <div
      class={clsx(
        "px-8 md:px-12 lg:px-0 lg:pr-16 xl:pr-32 text-center lg:text-start flex flex-col gap-y-8",
        className
      )}
      {...rest}
    >
      <Heading class="font-semibold text-2xl lg:text-3xl">{() => selectedFeature().title}</Heading>
      <Description class="text-sm md:text-base mx-auto xl:text-lg lg:text-start">
        {() => selectedFeature().description}
      </Description>
      <Button class="self-center lg:self-start" variant="Primary">More Info</Button>
    </div>
  );
};

export default FeatureContent;
