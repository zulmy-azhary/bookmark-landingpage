import type { Component } from "solid-js";
import { Description, Heading } from "../atoms";

const FeatureHeader: Component = () => {
  return (
    <div class="flex flex-col gap-y-4 text-center">
      <Heading class="text-3xl font-medium">Features</Heading>
      <Description class="text-sm md:text-base max-w-[18rem] md:max-w-2xl mx-auto">
        Our aim is to make it quick and easy for you to access your favourite websites. Your
        bookmarks sync between your devices so you can access them on the go.
      </Description>
    </div>
  );
};

export default FeatureHeader;
