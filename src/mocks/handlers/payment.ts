import type { GetPaymentMethodListResponseType, RegistPaymentMethodRequestType, RegistPaymentMethodResponseType, } from '@/lib/network/types/payment';
import { http } from 'msw'
import { ErrorHandler } from '../middleware/ErrorHandler'
import { parseAuth, withAuth } from '../middleware/token';
import { GetMSWAccountById, UpdateMSWAccountById } from '../mockDataStorage/account';
import { GetMSWPaymentMethodByAccountId, InsertMSWPaymentMethod } from '../mockDataStorage/payment';
import { createSuccessResponse } from '.';

const handlers = [
  http.post('/api/payment/regist', ErrorHandler<RegistPaymentMethodRequestType, RegistPaymentMethodResponseType>(
    withAuth(
      async ({ request }) => {
        const token = await parseAuth(request.headers)
        const data = await request.json()
        const accountId = token.payload.accountId
        const accountInfo = GetMSWAccountById(accountId)

        UpdateMSWAccountById(accountId, {
          ...accountInfo,
          billingPolicies: Object.assign({}, accountInfo.billingPolicies, data.policies)
        })
        InsertMSWPaymentMethod({
          ...data.paymentMethod,
          accountId,
        })

        return createSuccessResponse({
          result: true
        })
      })
  )),
  http.get('/api/payment/registedList', ErrorHandler<object, GetPaymentMethodListResponseType>(
    withAuth(
      async ({ request }) => {
        const token = await parseAuth(request.headers)
        const accountId = token.payload.accountId

        return createSuccessResponse({
          result: GetMSWPaymentMethodByAccountId(accountId)
        })
      })
  ))
]

export default handlers