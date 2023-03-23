import { Component } from "solid-js";
import { Description, Heading } from "../atoms";
import { FeatureContent, FeatureHeader, FeatureTab } from "../molecules";

const Features: Component = () => {
  return (
    <section class="px-8 md:px-12 lg:px-16 xl:px-32">
      <FeatureHeader />
      <FeatureTab />
      <FeatureContent />
    </section>
  )
}

type Feature = {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
};

const features: Feature[] = [
  {
    id: 1,
    name: "Simple Bookmarking",
    title: "Bookmark in one click",
    description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: "illustration-features-tab-1",
  },
  {
    id: 2,
    name: "Speedy Searching",
    title: "Intelligent search",
    description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: "illustration-features-tab-2",
  },
  {
    id: 3,
    name: "Easy Sharing",
    title: "Share your bookmarks",
    description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: "illustration-features-tab-3",
  },
];

export default Features;
