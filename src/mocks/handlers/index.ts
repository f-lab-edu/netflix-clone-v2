import { HttpResponse } from 'msw'
import AccountHandlers from './account'
import MembershipHandlers from './membership'
import PaymentHandlers from './payment'

const handlers = [
  ...AccountHandlers,
  ...MembershipHandlers,
  ...PaymentHandlers
]

const successResponseObj = {
  errorCode: 0,
  message: ''
}

export const createSuccessResponse = <T extends object>(responseData: T) => {
  const obj = Object.assign(responseData, successResponseObj)
  return HttpResponse.json<T & typeof successResponseObj>(obj, { status: 200, statusText: 'OK' })
}

export default handlers
