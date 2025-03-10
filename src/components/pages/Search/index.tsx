import type { NextPageWithLayout } from '@/pages/_app';
import { useSearchParams } from 'next/navigation';
import BrowserLayout from '@/components/layout/BrowserLayout';
import NormalContent from '@/components/ui/Content/NormalContent';
import { ConstListStyleCss } from '@/components/ui/Content/style/listStyle';
import ConditionalRender from '@/components/utils/ConditionalRender';
import Intersection from '@/components/utils/Intersection';
import useGetContentByKeyword from '@/hooks/Query/content/useGetContentByKeyword';
import { useDebounceState } from '@/hooks/useDebounce';
import { SearchPageListCss } from './style';

const SearchPage: NextPageWithLayout = () => {
  // TODO: use on other browse page
  const searchParams = useSearchParams()
  const queryParam = searchParams.get('keyword') || ''
  const [keyword, setKeyword] = useDebounceState(queryParam, 1000)
  setKeyword(queryParam)

  const { data, hasNextPage, fetchNextPageOnIdle: callOnIdle, isSuccess } = useGetContentByKeyword(keyword)

  return <div>
    <div css={[ConstListStyleCss, SearchPageListCss]}>
      {data?.map((content) => <NormalContent key={`content-${content.id}`} content={content} />)}
    </div>
    <ConditionalRender.Boolean
      condition={hasNextPage && isSuccess}
      render={{
        true: <Intersection onVisible={() => callOnIdle()} thresholds={1}>
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