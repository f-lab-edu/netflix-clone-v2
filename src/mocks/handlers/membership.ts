import type { MembershipListResponseType, MembershipResponseType } from '@/lib/network/types/membership';
import { http } from 'msw'
import { ErrorHandler } from '../middleware/ErrorHandler'
import { GetMSWMembershipById, GetMSWMembershipList } from '../mockDataStorage/membership';
import { createSuccessResponse } from '.';

const handlers = [
  http.get('/api/membership/list', ErrorHandler<object, MembershipListResponseType>(async () => {
    const MembershipList = GetMSWMembershipList()
    return createSuccessResponse({
      list: MembershipList
    })
  })),
  http.get('/api/membership/:id', ErrorHandler<object, MembershipResponseType, { id: string }>(async ({ params }) => {
    const { id } = params
    const numId = Number(id)

    const membership = GetMSWMembershipById(numId)
    return createSuccessResponse({
      membership
    })
  }))
]

export default handlers