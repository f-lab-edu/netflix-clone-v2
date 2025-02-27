import type { IntersectionCallback } from '@/components/ui/utils/Intersection/lib';
import type { NextPageWithLayout } from '@/pages/_app';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import BrowserLayout from '@/components/layout/BrowserLayout';
import Intersection from '@/components/ui/utils/Intersection';
import { useDebounceState } from '@/hooks/useDebounce';

const SearchPage: NextPageWithLayout = () => {
  const router = useRouter()
  // TODO: use on other browse page
  const searchParams = useSearchParams()
  const [keyword, setKeyword] = useDebounceState('', 500)
  useEffect(() => {
    const keywordParam = searchParams.get('keyword')
    if (!keywordParam) {
      router.back()
      return
    }
    setKeyword(keywordParam)
  }, [router, searchParams, setKeyword])

  const loadMoreAction: IntersectionCallback = (v) => {
    if (v.intersectionRatio === 1) {
      console.log(v)
    }
  }

  return <div>
    {keyword}
    <Intersection onVisible={loadMoreAction}>
      <div>
        Loading Skeleton
      </div>
    </Intersection>
  </div>
}
SearchPage.getLayout = (page) => {
  return <BrowserLayout headerType='browse'>{page}</BrowserLayout>
}
export default SearchPage