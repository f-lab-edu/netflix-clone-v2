import type { ErrorResponse } from './error';

export type ContentSearchRequest = {
  keyword: string,
  size: number,
  page: number,
}
export type ContentSearchResponse = {
  list: Content[],
  total: number
} & ErrorResponse

export type ContentByIdPathParam = {
  contentId: string
}
export type ContentByIdResponse = {
  content: ContentWithDetails
} & ErrorResponse