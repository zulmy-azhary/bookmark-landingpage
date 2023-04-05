import type { Component } from "solid-js";
import { FooterNavList, SocialMedia } from "../molecules";
import { Logo } from "../atoms";

const Footer: Component = () => {
  return (
    <footer class="bg-veryDarkBlue py-10 md:py-6">
      <div class="grid justify-items-center gap-y-10 md:justify-items-start grid-cols-12 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
        <Logo class="fill-white col-span-full md:col-span-4 lg:col-span-3 xl:col-span-2" />
        <FooterNavList class="col-span-full md:col-span-4 lg:col-span-6 xl:col-span-8" />
        <SocialMedia class="col-span-full md:col-span-4 lg:col-span-3 xl:col-span-2 md:justify-self-end" />
      </div>
    </footer>
  );
};

export default Footer;
