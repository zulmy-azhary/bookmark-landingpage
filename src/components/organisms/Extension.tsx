import { type Component, For } from "solid-js";
import { ExtensionCard, SectionHeader } from "../molecules";
import { extensions } from "../../helpers/data";

const Extension: Component = () => {
  return (
    <section class="flex flex-col gap-y-8 xl:mt-32">
      <SectionHeader
        heading="Download the extension"
        description="We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to proritize."
      />
      <div class="flex justify-center items-center gap-8 px-8 md:px-12 lg:px-16 xl:px-32 min-h-[27.5rem] flex-wrap">
        <For each={extensions}>{(extension) => <ExtensionCard {...extension} />}</For>
      </div>
    </section>
  );
};

export default Extension;
