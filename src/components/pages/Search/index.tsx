import type { IntersectionCallback } from '@/components/utils/Intersection/lib';
import type { NextPageWithLayout } from '@/pages/_app';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import BrowserLayout from '@/components/layout/BrowserLayout';
import NormalContent from '@/components/ui/Content/NormalContent';
import { ConstListStyleCss } from '@/components/ui/Content/style/listStyle';
import ConditionalRender from '@/components/utils/ConditionalRender';
import Intersection from '@/components/utils/Intersection';
import useGetContentByKeyword from '@/hooks/Query/content/useGetContentByKeyword';
import { useDebounceState } from '@/hooks/useDebounce';
import { SearchPageListCss } from './style';

const SearchPage: NextPageWithLayout = () => {
  const router = useRouter()
  // TODO: use on other browse page
  const searchParams = useSearchParams()
  const [keyword, setKeyword] = useDebounceState(searchParams.get('keyword') || '', 500)
  useEffect(() => {
    const keywordParam = searchParams.get('keyword')
    if (!keywordParam) {
      return
    }
    setKeyword(keywordParam)
  }, [router, searchParams, setKeyword])

  const { data, hasNextPage, fetchNextPage, isFetching, isSuccess } = useGetContentByKeyword(keyword)

  const loadMoreAction: IntersectionCallback = () => {
    if (isFetching) return
    if (!isSuccess) return
    fetchNextPage()
  }

  return <div>
    <div css={[ConstListStyleCss, SearchPageListCss]}>
      {data?.map((content) => <NormalContent key={`content-${content.id}`} content={content} />)}
    </div>
    <ConditionalRender.Boolean
      condition={hasNextPage && isSuccess}
      render={{
        true: <Intersection onVisible={loadMoreAction} thresholds={1}>
          <div css={{ marginBottom: '100px' }}>
            Loading Skeleton
          </div>
        </Intersection>
      }}
    />
  </div>
}
SearchPage.getLayout = (page) => {
  return <BrowserLayout headerType='browse'>{page}</BrowserLayout>
}
export default SearchPage