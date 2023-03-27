import { Component, JSX } from 'solid-js'
import { Extension } from '../../types';

type Props = JSX.HTMLAttributes<HTMLDivElement> & Omit<Extension, "id">;

const ExtensionCard: Component<Props> = (props) => {
  const { class: className, image, title, version, ...rest } = props;

  return (
    <div class="col-span-12 lg:col-span-4" {...rest}>{title}</div>
  )
}

export default ExtensionCard