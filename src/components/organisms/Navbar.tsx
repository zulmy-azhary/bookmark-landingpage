import { type Component, Show } from "solid-js";
import { BrandLogo, NavList } from "../molecules";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Navbar: Component = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <header class="py-8 flex justify-between items-center px-8 md:px-12 lg:px-16 xl:px-32">
      <BrandLogo />
      <Show
        when={isTablet()}
        fallback={
          <button>
            <img src={"/assets/images/icon-hamburger.svg"} alt="Hamburger menu" />
          </button>
        }
      >
        <NavList />
      </Show>
    </header>
  );
};

export default Navbar;
