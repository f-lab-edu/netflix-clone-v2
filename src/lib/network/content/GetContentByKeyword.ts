import type { ContentSearchRequest, ContentSearchResponse } from '../types/content';
import api from '..'

export const GetContentByKeyword = async (params: ContentSearchRequest) => {
  const result = await api.get<ContentSearchResponse>('content/search', {
    searchParams: params
  }).json()
  return result
}