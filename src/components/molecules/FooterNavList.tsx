import { For, type Component, type JSX } from "solid-js";
import { NavItem } from "../atoms";
import clsx from "clsx";

type Props = JSX.HTMLAttributes<HTMLUListElement>;

const FooterNavList: Component<Props> = (props) => {
  const { class: className, ...rest } = props;
  const items: JSX.Element[] = [
    <NavItem class="text-white font-normal">Features</NavItem>,
    <NavItem class="text-white font-normal">Pricing</NavItem>,
    <NavItem class="text-white font-normal">Contact</NavItem>,
  ];

  return (
    <ul
      class={clsx(
        "flex flex-col md:flex-row gap-y-6 md:gap-x-6 lg:gap-x-8 xl:gap-x-10 items-center",
        className
      )}
      {...rest}
    >
      <For each={items}>{(item) => item}</For>
    </ul>
  );
};

export default FooterNavList;
