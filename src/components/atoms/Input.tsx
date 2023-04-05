import { type Setter, type Component, type JSX, type Accessor, Show } from "solid-js";
import clsx from "clsx";

interface Props extends JSX.InputHTMLAttributes<HTMLInputElement> {
  error: Accessor<string>;
  email: Accessor<string>;
  setEmail: Setter<string>;
}

const Input: Component<Props> = (props) => {
  const { error, email, setEmail, class: className, ...rest } = props;

  const onChange = (e: Event) => {
    setEmail((e.target as HTMLInputElement).value);
  };

  return (
    <div class="relative flex items-center">
      <input
        value={email()}
        onChange={onChange}
        class={clsx(
          "relative rounded-md px-4 py-3 focus:outline-none text-sm w-full",
          error() && "pr-11",
          className
        )}
        {...rest}
      />
      <Show when={error()}>
        <img src="/assets/images/icon-error.svg" alt="Error icon" class="absolute right-3" />
      </Show>
    </div>
  );
};

export default Input;
