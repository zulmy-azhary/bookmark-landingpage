import { type Component, Show } from "solid-js";
import { BrandLogo, NavList } from "../molecules";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Navbar: Component = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <header class="py-8 flex justify-between items-center">
      <BrandLogo />
      <Show when={isTablet()}>
        <NavList />
      </Show>
    </header>
  );
};

export default Navbar;
