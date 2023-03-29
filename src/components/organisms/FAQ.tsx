import { Component } from "solid-js";
import { SectionHeader } from "../molecules";

const FAQ: Component = () => {
  return (
    <section>
      <SectionHeader
        heading="Frequently Asked Questions"
        description="Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
      />
    </section>
  );
};

export default FAQ;
