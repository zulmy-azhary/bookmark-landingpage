import type { Component } from "solid-js";
import { Accordion, SectionHeader } from "../molecules";

const FAQ: Component = () => {
  return (
    <section class="flex flex-col gap-y-6">
      <SectionHeader
        heading="Frequently Asked Questions"
        description="Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
      />
      <Accordion />
    </section>
  );
};

export default FAQ;
