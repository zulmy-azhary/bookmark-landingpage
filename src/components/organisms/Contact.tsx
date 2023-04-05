import type { Component } from "solid-js";
import { ContactForm } from "../molecules";

const Contact: Component = () => {
  return (
    <section class="bg-softBlue">
      <div class="md:max-w-lg mx-auto flex flex-col items-center py-16 gap-y-6 text-center px-8 md:px-12 lg:px-0">
        <h3 class="text-white tracking-[0.5em] uppercase text-sm">35,000+ Already Joined</h3>
        <h2 class="tracking-wide text-white text-3xl font-medium">
          Stay up-to-date with what we're doing
        </h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
