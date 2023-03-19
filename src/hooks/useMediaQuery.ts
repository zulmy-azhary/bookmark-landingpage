import { type Accessor, createEffect, createSignal, onCleanup } from "solid-js";

export const useMediaQuery = (query: string): Accessor<boolean> => {
  const [matches, setMatches] = createSignal<boolean>(false);
  const media: MediaQueryList = window.matchMedia(query);

  createEffect(() => {
    const listener = () => setMatches(media.matches);
    if (media.matches !== matches()) setMatches(media.matches);
    window.addEventListener("resize", listener);

    // Clean Up
    onCleanup(() => window.removeEventListener("resize", listener));
  });

  return matches;
};
