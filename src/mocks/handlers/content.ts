import type { ContentByIdPathParam, ContentByIdResponse, ContentSearchResponse } from '@/lib/network/types/content';
import type { DefaultBodyType } from 'msw';
import { http } from 'msw'
import { isNumber } from '@/lib/utils/numbers'
import { ErrorCode, ErrorHandler } from '../middleware/ErrorHandler'
import { GetMSWContentById, GetMSWContentList } from '../mockDataStorage/content'
import ErrorException from '../type/ErrorResponse'
import { createSuccessResponse } from '.'

const handlers = [
  http.get('/api/content/search', ErrorHandler<DefaultBodyType, ContentSearchResponse>(
    ({ request }) => {
      const url = new URL(request.url)
      const keyword = url.searchParams.get('keyword') ?? ''
      const size = Number(url.searchParams.get('size'))
      const page = Number(url.searchParams.get('page'))
      if (!isNumber(size) || !isNumber(page)) throw new ErrorException('wrong value inserted', ErrorCode.WRONG_REQUEST)

      const contentList = GetMSWContentList()

      const resultList = keyword ? contentList.filter((content) => {
        return content.thumbnail && content.title.includes(keyword) ||
          content.description.includes(keyword) ||
          content.keywords.join(',').includes(keyword)
      }) : contentList
      return createSuccessResponse({
        list: resultList.slice((page - 1) * size, page * size),
        total: resultList.length
      })
    }
  )),
  http.get('/api/content/:contentId', ErrorHandler<DefaultBodyType, ContentByIdResponse, ContentByIdPathParam>(
    ({ params }) => {
      const contentId = Number(params.contentId)
      if (!isNumber(contentId)) throw new ErrorException('wrong value inserted', ErrorCode.WRONG_REQUEST)
      const content = GetMSWContentById(contentId)
      if (!content) throw new ErrorException('Content not found', ErrorCode.CONTENT_NOT_FOUND)
      return createSuccessResponse({
        content
      })
    }
  ))
]

export default handlers
