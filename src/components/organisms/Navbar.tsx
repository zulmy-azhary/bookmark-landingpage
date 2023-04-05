import { type Component, Show, createSignal, createEffect } from "solid-js";
import { BrandLogo, NavList } from "../molecules";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import ActiveNav from "../molecules/ActiveNav";
import { Logo } from "../atoms";

const Navbar: Component = () => {
  const [isActive, setActive] = createSignal<boolean>(false);
  const isTablet = useMediaQuery("(min-width: 768px)");

  const handleActive = () => {
    setActive((prev) => !prev);
  };

  createEffect(() => {
    isTablet() && setActive(false);
  });

  return (
    <header class="py-8 flex justify-between items-center px-8 md:px-12 lg:px-16 xl:px-32">
      <Show when={!isActive()}>
        <BrandLogo class="relative z-50" />
      </Show>
      <Show
        when={isTablet()}
        fallback={
          <>
            <Show when={isActive()}>
              <Logo
                class="relative z-50 fill-white"
                circleFill="#FFF"
                pathFill="hsl(229, 31%, 21%)"
                pathFillOpacity={0.9}
              />
              <ActiveNav isActive={isActive} />
            </Show>
            <button onClick={handleActive} class="relative z-50">
              <img
                src={`/assets/images/icon-${isActive() ? "close" : "hamburger"}.svg`}
                alt="Hamburger menu"
              />
            </button>
          </>
        }
      >
        <NavList />
      </Show>
    </header>
  );
};

export default Navbar;
