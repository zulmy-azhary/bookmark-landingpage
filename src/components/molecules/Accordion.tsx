import { Component, For, createSignal } from "solid-js";
import { AccordionItem } from "../atoms";
import { faqs } from "../../helpers/data";

const Accordion: Component = () => {
  const [activeIdx, setActiveIdx] = createSignal<number | null>(null);
  return (
    <div class="w-full max-w-[18rem] md:max-w-2xl mx-auto xl:max-w-[33rem]">
      <For each={faqs}>
        {(faq) => <AccordionItem faq={faq} activeIdx={activeIdx} setActiveIdx={setActiveIdx} />}
      </For>
    </div>
  );
};

export default Accordion;
