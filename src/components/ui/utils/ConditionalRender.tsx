import type { ReactNode } from 'react';

type KeyType = string | number

interface ConditionalRenderProps {
  render: { [k: KeyType]: ReactNode }
  condition: KeyType
}

interface ConditionalRenderBooleanProps {
  render: { false: ReactNode, true: ReactNode }
  condition: boolean
}

const ConditionalRender = ({ render, condition }: ConditionalRenderProps) => {
  if (render[condition]) return <>{render[condition]}</>
  return null
}

const ConditionalRenderBoolean = ({ render, condition }: ConditionalRenderBooleanProps) => {
  return <>{condition ? render.true : render.false}</>
}

ConditionalRender.Boolean = ConditionalRenderBoolean

export default ConditionalRender