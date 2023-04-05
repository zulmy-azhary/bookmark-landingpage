import { createEffect, onCleanup } from "solid-js";

export const useLockBodyScroll = () => {
  const originalStyle = window.getComputedStyle(document.body).overflow;

  createEffect(() => {
    document.body.style.overflow = "hidden";
  });

  onCleanup(() => (document.body.style.overflow = originalStyle));
};
