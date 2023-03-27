import { Component, For } from "solid-js";
import { ExtensionCard, SectionHeader } from "../molecules";
import { extensions } from "../../helpers/data";

const Extension: Component = () => {
  return (
    <section class="flex flex-col gap-y-8">
      <SectionHeader
        heading="Download the extension"
        description="We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to proritize."
      />
      <div class="grid grid-cols-12">
        <For each={extensions}>
          {(extension) => (
            <ExtensionCard
              image={extension.image}
              title={extension.title}
              version={extension.version}
            />
          )}
        </For>
      </div>
    </section>
  );
};

export default Extension;
