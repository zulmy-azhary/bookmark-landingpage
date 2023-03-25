import { Component, JSX } from "solid-js";
import { Shape } from "../atoms";
import { Feature } from "../../types";
import clsx from "clsx";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
  selectedFeature: () => Pick<Feature, "image">;
}

const FeatureImage: Component<Props> = (props) => {
  const { selectedFeature, class: className, ...rest } = props;

  return (
    <div
      class={clsx("w-full grid place-items-center lg:place-items-end relative", className)}
      {...rest}
    >
      <img
        class="h-48 md:h-64 lg:h-72 xl:h-fit object-contain"
        src={selectedFeature().image}
        alt="Features image"
      />
      <Shape
        position="left"
        class="translate-y-6 md:translate-y-1/4 w-3/4 md:w-3/5 xl:w-9/12 h-44 md:h-56 lg:h-64 xl:h-96"
      />
    </div>
  );
};

export default FeatureImage;
