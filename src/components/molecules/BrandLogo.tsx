import type { Component } from "solid-js";
import { Logo } from "../atoms";

const BrandLogo: Component = () => {
  return (
    <a href="/">
      <Logo class="cursor-pointer" />
    </a>
  );
};

export default BrandLogo;
