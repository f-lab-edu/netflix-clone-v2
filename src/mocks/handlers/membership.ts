import type { GetMembershipListResponseType } from '@/lib/network/types/membership';
import { http } from 'msw'
import { ErrorHandler } from '../middleware/ErrorHandler'
import { GetMSWMembershipList } from '../mockDataStorage/membership';
import { createSuccessResponse } from '.';

const handlers = [
  http.get('/api/membership/list', ErrorHandler<object, GetMembershipListResponseType>(async () => {
    const MembershipList = GetMSWMembershipList()
    return createSuccessResponse({
      list: MembershipList
    })
  }))
]

export default handlers