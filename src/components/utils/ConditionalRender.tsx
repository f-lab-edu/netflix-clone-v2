import type { ReactNode } from 'react';

type KeyType = string | number
type ConditionRendererType = { [k: KeyType]: ReactNode }

interface ConditionalRenderProps<P> {
  render: P
  condition: keyof P
}

interface ConditionalRenderBooleanProps {
  render: { false?: ReactNode, true?: ReactNode }
  condition: boolean
}

const ConditionalRender = <P extends ConditionRendererType = ConditionRendererType>({ render, condition }: ConditionalRenderProps<P>) => {
  if (render[condition]) return <>{render[condition]}</>
  return null
}

const ConditionalRenderBoolean = ({ render, condition }: ConditionalRenderBooleanProps) => {
  return <>{condition ? render.true : render.false}</>
}

ConditionalRender.Boolean = ConditionalRenderBoolean

export default ConditionalRender
