import type { Component } from "solid-js";
import { HeroContent, HeroImage } from "../molecules";

const Hero: Component = () => {
  return (
    <section class="flex flex-col-reverse gap-y-10 lg:flex-row justify-between items-center lg:py-8 xl:py-6">
      <HeroContent class="lg:basis-1/2 xl:basis-2/5" />
      <HeroImage class="lg:basis-1/2 xl:basis-3/5" />
    </section>
  );
};

export default Hero;
