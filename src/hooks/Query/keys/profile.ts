import type { MutationKey, QueryKey } from '@tanstack/react-query';

export const GET_PROFILES_QUERY_KEY = ['profile']
export const GET_PROFILE_BY_ID_QUERY_KEY = (id: number): QueryKey => [...GET_PROFILES_QUERY_KEY, id]
export const UPDATE_PROFILE_MUTATION_KEY = (id: number): MutationKey => ['update-profile', id]
export const DELETE_PROFILE_MUTATION_KEY = (id: number): MutationKey => ['delete-profile', id]