import type { Accessor, Component, JSX } from "solid-js";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { SocialMedia } from ".";
import { Button, NavItem } from "../atoms";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
  isActive: Accessor<boolean>;
}

const navItemClass =
  "font-thin text-white !text-xl w-full relative before:absolute after:absolute md:before:static md:after:static before:top-0 after:bottom-0 before:h-[1px] before:inset-x-0 after:h-[1px] after:inset-x-0 before:bg-gray-500 after:bg-gray-500 before:-translate-y-[1px] py-5 md:py-0";

const ActiveNav: Component<Props> = (props) => {
  const { isActive, class: className, ...rest } = props;
  useLockBodyScroll();
  return (
    <div
      class="fixed inset-0 z-10 bg-veryDarkBlue/90 text-white flex flex-col justify-between items-center pt-28 pb-12"
      {...rest}
    >
      <ul class="flex flex-col items-center text-center w-full max-w-xs mx-auto">
        <NavItem class={navItemClass}>Features</NavItem>
        <NavItem class={navItemClass}>Pricing</NavItem>
        <NavItem class={navItemClass}>Contact</NavItem>
        <Button variant="ActiveNav" class="!text-xl uppercase tracking-widest mt-6 w-full">
          Login
        </Button>
      </ul>
      <SocialMedia />
    </div>
  );
};

export default ActiveNav;
