import type { Component, JSX } from "solid-js";
import type { Extension } from "../../types";
import { Button, Description } from "../atoms";
import clsx from "clsx";

type Props = Omit<JSX.HTMLAttributes<HTMLDivElement>, "id"> & Extension;

const ExtensionCard: Component<Props> = (props) => {
  const { class: className, id, image, title, version, ...rest } = props;

  return (
    <div
      class={clsx(
        "col-span-12 lg:col-span-4 shadow-xl shadow-softBlue/20 flex flex-col items-center rounded-2xl w-11/12 md:w-fit",
        id === 1 && "self-start",
        id === 3 && "self-end"
      )}
      {...rest}
    >
      <div class="flex flex-col items-center gap-y-10 w-full px-6 py-10 relative after:absolute after:bg-dots after:inset-x-0 after:bottom-0 after:h-[4px] after:bg-contain after:bg-center after:bg-no-repeat">
        <img src={`/assets/images/${image}.svg`} alt="Icon image" class="object-contain" />
        <div class="flex flex-col gap-y-1 items-center">
          <h3 class="text-veryDarkBlue font-semibold text-xl">{title}</h3>
          <Description class="text-sm">Minimum version {version}</Description>
        </div>
      </div>
      <div class="p-6 w-full">
        <Button class="w-full" variant="Primary">
          Add & Install Extension
        </Button>
      </div>
    </div>
  );
};

export default ExtensionCard;
