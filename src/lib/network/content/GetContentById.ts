import type { ContentByIdResponse } from '../types/content';
import api from '..'

export const GetContentById = (contentId: number) => {
  return api.get<ContentByIdResponse>(`content/${contentId}`).json()
}