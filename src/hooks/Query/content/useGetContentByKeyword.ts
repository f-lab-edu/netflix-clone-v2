import { useInfiniteQuery } from '@tanstack/react-query';
import useInfiniteQueryFetchOnIdle from '@/hooks/useInfiniteQueryFetchOnIdle';
import { GetContentByKeyword } from '@/lib/network/content/GetContentByKeyword';

export default function useGetContentByKeyword(keyword: string) {
  const infiniteQueryObj = useInfiniteQuery({
    queryKey: ['content', 'search', keyword],
    queryFn: ({ pageParam }) => GetContentByKeyword(pageParam),
    initialPageParam: {
      page: 1,
      size: 20,
      keyword,
    },
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.total <= lastPageParam.page * lastPageParam.size) return null
      return { ...lastPageParam, page: lastPageParam.page + 1 }
    },
    select({ pages }) {
      return pages.flatMap(v => v.list)
    }
  })
  const fetchNextPageOnIdle = useInfiniteQueryFetchOnIdle(infiniteQueryObj)
  return {
    ...infiniteQueryObj,
    fetchNextPageOnIdle
  }
}