import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

declare global {
  type CustomQueryOptions<Response> = Omit<UseQueryOptions<Response, Error, Response, QueryKey>, 'queryKey' | 'queryFn'>

  type CustomMutationOptions<Request, Response> = Omit<UseMutationOptions<Response, Error, Request, unknown>, 'mutationKey' | 'mutationFn'>
}
