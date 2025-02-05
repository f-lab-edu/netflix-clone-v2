import type { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

declare global {
  type CustomQueryOptions<Response, Selected = Response> = Omit<UseQueryOptions<Response, Error, Selected, QueryKey>, 'queryKey' | 'queryFn'>

  type CustomMutationOptions<Request, Response, Context = unknown> = Omit<UseMutationOptions<Response, Error, Request, Context>, 'mutationKey' | 'mutationFn'>
}
