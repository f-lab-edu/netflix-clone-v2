import type { InputHTMLAttributes } from 'react';
import { useId } from 'react';
import SearchIcon from '@/assets/netflix/layout/search-icon.svg'
import { SearchLayoutCss, SearchInputTextCss } from './style';

type SearchInputFieldProps = InputHTMLAttributes<HTMLInputElement> & CssProps

export default function SearchInputField({ className, ...inputProps }: SearchInputFieldProps) {
  const id = useId()

  return <div
    css={[SearchLayoutCss]}
    className={className}
  >
    <label htmlFor={id}>
      <SearchIcon />
    </label>
    <input
      id={id}
      {...inputProps}
      css={SearchInputTextCss}
      type="text"
      placeholder={'설명'}
    />
  </div>
}
