import type { Feature } from "../types";
import firstTab from "../assets/images/illustration-features-tab-1.svg";
import secondTab from "../assets/images/illustration-features-tab-2.svg";
import thirdTab from "../assets/images/illustration-features-tab-3.svg";

export const features: Feature[] = [
  {
    id: 1,
    name: "Simple Bookmarking",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: firstTab,
  },
  {
    id: 2,
    name: "Speedy Searching",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: secondTab,
  },
  {
    id: 3,
    name: "Easy Sharing",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: thirdTab,
  },
];
