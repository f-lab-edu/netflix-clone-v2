import type { DefaultBodyType, PathParams } from 'msw';
import { http, HttpResponse } from 'msw'
import { ErrorCode, ErrorHandler } from '../middleware/ErrorHandler';
import { generateAuth, parseAuth, withAuth } from '../middleware/token';
import ErrorException from '../type/ErrorResponse';

const accountList: { [key: number]: AccountBaseInfo } = {
  1: {
    id: 1,
    email: 'test@test.com',
    emailVerified: false,
    password: 'test1234',
    phone: '',
    phoneVerified: false
  }
}

const handlers = [
  http.post<PathParams, {
    email: string
  }>('/api/emailCheck', async ({ request }) => {
    const requestJson = await request.json()
    const responseObj = {
      checkResult: false
    }
    if (requestJson.email === 'test@test.com') {
      responseObj.checkResult = true
    }
    return HttpResponse.json(responseObj, { status: 200, statusText: 'OK' })
  }),
  http.post('/api/login', ErrorHandler<{
    email: string,
    password: string
  }, DefaultBodyType>(async ({ request }) => {
    const requestJson = await request.json()
    const account = Object.values(accountList).find(
      (account) => account.email === requestJson.email && account.password === requestJson.password
    )
    if (!account) {
      throw new ErrorException('Login failed', ErrorCode.LOGIN_FAILED)
    }
    const tokens = await generateAuth(account.id)
    return HttpResponse.json(tokens, {
      status: 200,
      statusText: 'OK'
    })
  })),
  http.get('/api/account/me', ErrorHandler(withAuth(async ({ request }) => {
    const token = await parseAuth(request.headers)
    return HttpResponse.json(accountList[token.payload.accountId])
  })))
]

export default handlers