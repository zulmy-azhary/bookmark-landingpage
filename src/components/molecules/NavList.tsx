import { type Component, type JSX, For } from "solid-js";
import { Button, NavItem } from "../atoms";

const NavList: Component = () => {
  const items: JSX.Element[] = [
    <NavItem>Features</NavItem>,
    <NavItem>Pricing</NavItem>,
    <NavItem>Contact</NavItem>,
    <Button variant="Secondary" class="!text-xs uppercase tracking-widest">
      Login
    </Button>,
  ];

  return (
    <ul class="flex md:gap-x-6 lg:gap-x-8 xl:gap-x-10 items-center">
      <For each={items}>{(item) => item}</For>
    </ul>
  );
};

export default NavList;
