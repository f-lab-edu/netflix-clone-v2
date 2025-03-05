import { useId, useRef } from 'react';
import SearchIcon from '@/assets/netflix/layout/search-icon.svg'
import useSearchFilter from './hooks/useSearchFilter';
import { SearchLayoutCss, SearchInputTextCss } from './style';

export default function SearchInputField() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const id = useId()

  const [keyword, onChange] = useSearchFilter()

  return <div
    css={[SearchLayoutCss]}
  >
    <label htmlFor={id}>
      <SearchIcon />
    </label>
    <input
      id={id}
      ref={inputRef}
      css={SearchInputTextCss}
      type="text"
      defaultValue={keyword}
      placeholder={'설명'}
      onChange={onChange}
    />
  </div>
}