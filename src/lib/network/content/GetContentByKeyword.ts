import type { ContentSearchRequest, ContentSearchResponse } from '../types/content';
import api from '..'

export const GetContentByKeyword = (params: ContentSearchRequest) => {
  return api.get<ContentSearchResponse>('content/search', {
    searchParams: params
  }).json()
}