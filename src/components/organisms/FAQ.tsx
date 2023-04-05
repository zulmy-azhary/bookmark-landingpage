import type { Component } from "solid-js";
import { Accordion, SectionHeader } from "../molecules";
import { Button } from "../atoms";

const FAQ: Component = () => {
  return (
    <section class="flex flex-col items-center gap-y-16">
      <SectionHeader
        heading="Frequently Asked Questions"
        description="Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
      />
      <Accordion />
      <Button variant="Primary">More Info</Button>
    </section>
  );
};

export default FAQ;
