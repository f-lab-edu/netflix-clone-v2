import type { ContentSearchResponse } from '@/lib/network/types/content';
import type { DefaultBodyType } from 'msw';
import { http } from 'msw'
import { isNumber } from '@/lib/utils/numbers'
import { ErrorCode, ErrorHandler } from '../middleware/ErrorHandler'
import { GetMSWContentList } from '../mockDataStorage/content'
import ErrorException from '../type/ErrorResponse'
import { createSuccessResponse } from '.'

const handlers = [
  http.get('/api/content/search', ErrorHandler<DefaultBodyType, ContentSearchResponse>(
    ({ request }) => {
      const url = new URL(request.url)
      const keyword = url.searchParams.get('keyword') ?? ''
      const size = Number(url.searchParams.get('size'))
      const page = Number(url.searchParams.get('page'))

      const contentList = GetMSWContentList()
      if (!isNumber(size) || !isNumber(page)) throw new ErrorException('wrong value inserted', ErrorCode.WRONG_REQUEST)

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
  ))
]

export default handlers