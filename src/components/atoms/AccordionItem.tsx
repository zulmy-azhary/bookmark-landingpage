import { type Accessor, type Component, type JSX, type Setter, Show } from "solid-js";
import type { FAQ } from "../../types";
import clsx from "clsx";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
  activeIdx: Accessor<number | null>;
  setActiveIdx: Setter<number | null>;
  faq: FAQ;
}

const AccordionItem: Component<Props> = (props) => {
  const { activeIdx, setActiveIdx, faq, ...rest } = props;

  const handleIdx = (idx: number) => (activeIdx() !== idx ? setActiveIdx(idx) : setActiveIdx(null));
  const focusIdx = () => activeIdx() === faq.id;

  return (
    <div
      class="group text-center md:text-start relative before:absolute after:absolute before:top-0 after:bottom-0 before:h-[1px] before:inset-x-0 after:h-[1px] after:inset-x-0 before:bg-gray-200 after:bg-gray-200 before:-translate-y-[1px]"
      {...rest}
    >
      <div
        class="cursor-pointer py-4 flex justify-between items-center pr-4"
        onClick={() => handleIdx(faq.id)}
      >
        <h1 class={clsx("text-lg", focusIdx() ? "" : "group-hover:text-softRed")}>{faq.title}</h1>
        <img
          src={"/assets/images/icon-arrow.svg"}
          alt="arrow icon"
          class={clsx("origin-center transition-transform", focusIdx() && "rotate-180")}
        />
      </div>
      <Show when={focusIdx()}>
        <p class="py-4 text-grayishBlue">{faq.description}</p>
      </Show>
    </div>
  );
};

export default AccordionItem;
