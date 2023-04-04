import type { Extension, FAQ, Feature } from "../types";

export const features: Feature[] = [
  {
    id: 1,
    name: "Simple Bookmarking",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: "illustration-features-tab-1",
  },
  {
    id: 2,
    name: "Speedy Searching",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: "illustration-features-tab-2",
  },
  {
    id: 3,
    name: "Easy Sharing",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: "illustration-features-tab-3",
  },
];

export const extensions: Extension[] = [
  {
    id: 1,
    image: "logo-chrome",
    title: "Add to Chrome",
    version: 62,
  },
  {
    id: 2,
    image: "logo-firefox",
    title: "Add to Firefox",
    version: 55,
  },
  {
    id: 3,
    image: "logo-opera",
    title: "Add to Opera",
    version: 46,
  },
];

export const faqs: FAQ[] = [
  {
    id: 1,
    title: "What is Bookmark?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: 2,
    title: "How can I request a new browser?",
    description:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: 3,
    title: "Is there a mobile app?",
    description:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    id: 4,
    title: "What about other Chromium browsers?",
    description:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];
