import { useRouter } from 'next/router';
import useQueryParameterState from './useQueryParameterState';

export default function useSearchFilter() {
  const router = useRouter()
  const queryKey = 'keyword'
  return useQueryParameterState(queryKey, ({
    query
  }) => {
    if (
      router.pathname === '/search' &&
      (
        !query ||
        typeof query === 'string' ||
        typeof query === 'object' && !query[queryKey]?.toString().length
      )
    ) {
      router.back()
      return
    }
    if (router.pathname === '/search') {
      {
        router.replace({
          query
        })
      }
    } else {
      router.push({
        pathname: '/search',
        query,
      })
    }
  })
}