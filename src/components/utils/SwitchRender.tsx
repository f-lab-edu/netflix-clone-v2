import type { ReactNode } from 'react';

type KeyType = string | number
type SwitchRendererType = { [k: KeyType]: ReactNode }

interface SwitchRenderProps<P> {
  render: P
  condition: keyof P
}

const SwitchRender = <P extends SwitchRendererType = SwitchRendererType>({ render, condition }: SwitchRenderProps<P>) => {
  if (render[condition]) return <>{render[condition]}</>
  return null
}

export default SwitchRender
