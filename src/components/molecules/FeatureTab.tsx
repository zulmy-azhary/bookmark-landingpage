import { type Component, For, type JSX, Accessor } from "solid-js";
import type { FeatureTab as TFeatureTab } from "../../types";
import clsx from "clsx";

interface Props extends JSX.HTMLAttributes<HTMLUListElement> {
  tabs: TFeatureTab[];
  activeTab: Accessor<TFeatureTab>;
  tabChange: (selectedTab: TFeatureTab) => void;
}

const FeatureTab: Component<Props> = (props) => {
  const { tabs, activeTab, tabChange, class: className, ...rest } = props;

  return (
    <ul
      class={
        "flex flex-col lg:flex-row text-center lg:text-start justify-center px-8 md:px-12 lg:px-0"
      }
      {...rest}
    >
      <For each={tabs}>
        {(item, idx) => (
          <li
            class={clsx(
              "cursor-pointer text-veryDarkBlue px-12 py-6 border-b-[1px] relative",
              item === activeTab()
                ? "after:absolute after:h-[3px] after:bg-softRed after:bottom-0 after:inset-x-0"
                : "opacity-70 hover:text-softRed"
            )}
            onClick={() => tabChange(item)}
            data-index={idx()}
          >
            {item}
          </li>
        )}
      </For>
    </ul>
  );
};

export default FeatureTab;
