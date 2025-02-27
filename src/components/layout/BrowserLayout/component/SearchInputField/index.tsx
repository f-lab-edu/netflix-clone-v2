import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect, useId, useRef, useState } from 'react';
import SearchIcon from '@/assets/netflix/layout/search-icon.svg'
import { SearchLayoutCss, SearchInputTextCss } from './style';

export default function SearchInputField() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParam = useSearchParams()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const id = useId()
  const [keyword, setKeyword] = useState(searchParam.get('keyword') || '')

  useEffect(() => {
    if (!keyword) {
      if (!searchParam.get('keyword')) return
      if (pathname === '/search') {
        router.back()
      }
      return
    }
    const featurePath = `/search?keyword=${encodeURIComponent(keyword)}`
    if (pathname === '/search') {
      router.replace(featurePath)
    } else {
      router.push(featurePath)
    }
  }, [keyword])

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
      onChange={(e) => {
        setKeyword(e.target.value)
      }}
    />
  </div>
}