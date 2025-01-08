import type { FC, ReactElement, ReactNode } from 'react';
import { Children } from 'react'
import { TypeCheck } from './TypeCheck';

export const getFilteredElement = (nodes: ReactNode, type: FC): ReactElement[] => {
  const childrenArray = Children.toArray(nodes)
  const filteredArray = childrenArray.filter(
    child => TypeCheck(child, type)
  )
  return filteredArray
}