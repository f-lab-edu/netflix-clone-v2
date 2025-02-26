import type { NextPageWithLayout } from '@/pages/_app';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import BrowserLayout from '@/components/layout/BrowserLayout';
import { useDebounceState } from '@/hooks/useDebounce';

const SearchPage: NextPageWithLayout = () => {
  const router = useRouter()
  // TODO: use on other browse page
  const searchParams = useSearchParams()
  const [keyword, setKeyword] = useDebounceState('', 500, { clearAll: true })
  useEffect(() => {
    const keywordParam = searchParams.get('keyword')
    if (!keywordParam) {
      router.back()
      return
    }
    setKeyword(keywordParam)
  }, [router, searchParams, setKeyword])

  return <div>
    {keyword}
  </div>
}
SearchPage.getLayout = (page) => {
  return <BrowserLayout>{page}</BrowserLayout>
}
export default SearchPage