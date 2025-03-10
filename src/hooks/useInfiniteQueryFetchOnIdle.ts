import type { DefinedUseInfiniteQueryResult, FetchNextPageOptions, UseInfiniteQueryResult } from '@tanstack/react-query';
import { useCallback } from 'react';

export default function useInfiniteQueryFetchOnIdle<D, E>({
  isFetching,
  isSuccess,
  fetchNextPage
}: DefinedUseInfiniteQueryResult<D, E> | UseInfiniteQueryResult<D, E>) {
  return useCallback((options?: FetchNextPageOptions) => {
    if (isFetching) return
    if (!isSuccess) return
    return fetchNextPage(options)
  }, [isFetching, isSuccess, fetchNextPage])
}