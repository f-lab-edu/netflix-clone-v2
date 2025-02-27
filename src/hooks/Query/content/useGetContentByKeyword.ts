import { useInfiniteQuery } from '@tanstack/react-query';
import { GetContentByKeyword } from '@/lib/network/content/GetContentByKeyword';

export default function useGetContentByKeyword(keyword: string) {
  return useInfiniteQuery({
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
      return pages.reduce((acc, cur) => {
        acc.push(...cur.list)
        return acc
      }, [] as Content[])
    }
  })
}