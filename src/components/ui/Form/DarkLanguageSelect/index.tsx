import type { ReactNode, SelectHTMLAttributes } from 'react';
import LangSvg from '@assets/netflix/lang-icon.svg'
import DarkSelect from '../DarkSelect';
type DarkLanguageSelectProps = {
  children?: ReactNode
}

export default function DarkLanguageSelect({ children, ...props }: SelectHTMLAttributes<HTMLSelectElement> & DarkLanguageSelectProps) {
  return <DarkSelect prefix={<LangSvg />} prefixSize='1rem' {...props}>
    {children}
  </DarkSelect>
}