import { useRouter } from 'next/router';
import useQueryParameterState from './useQueryParameterState';

export default function useSearchFilter() {
  const router = useRouter()
  const queryKey = 'keyword'
  const fallbackKey = 'fallbackUrl'
  return useQueryParameterState(queryKey, ({
    query
  }) => {
    const { [fallbackKey]: fallbackUrl, ...queryOthers } = query
    if (
      location.pathname === '/search' && !query[queryKey]?.toString().length
    ) {
      router.push({
        pathname: String(fallbackUrl ?? '') || '/browse'
      })
      return
    }

    const routerAction = location.pathname !== '/search' ? router.push : router.replace
    routerAction({
      pathname: '/search',
      query: {
        ...query,
        [fallbackKey]: fallbackUrl || location.pathname
      }
    }, {
      pathname: '/search',
      query: queryOthers
    }, { shallow: true })
  })
}
