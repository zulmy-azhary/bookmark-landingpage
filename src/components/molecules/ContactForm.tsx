import { type Component, Show, createSignal } from "solid-js";
import { Button, Input } from "../atoms";
import clsx from "clsx";

const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const ContactForm: Component = () => {
  const [email, setEmail] = createSignal("");
  const [error, setError] = createSignal("");

  const onSubmit = (e: Event) => {
    e.preventDefault();
    if (!email()) {
      return setError("Email is required.");
    }

    if (!email().toLowerCase().match(regex)) {
      return setError("Whoops, make sure it's an email");
    }

    setError("");
    console.log("Your email: ", email());
  };

  return (
    <form onSubmit={onSubmit} class="flex flex-col md:flex-row gap-4 w-full">
      <div
        class={clsx(
          "grow flex flex-col",
          error() && " bg-softRed p-[2px] rounded-md w-full md:w-fit"
        )}
      >
        <Input
          error={error}
          email={email}
          setEmail={setEmail}
          type="text"
          placeholder="Enter your email address"
        />
        <Show when={error()}>
          <span class="italic text-xs tracking-wider py-1 text-white text-start px-3">
            {error()}
          </span>
        </Show>
      </div>
      <Button class="h-fit w-full md:w-fit" type="submit" variant="Secondary">
        Contact Us
      </Button>
    </form>
  );
};

export default ContactForm;
