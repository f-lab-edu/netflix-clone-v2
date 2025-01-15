import type { EmailCheckRequestType, EmailCheckResponseType, LoginRequestType, LoginResponseType, MyInfoResponseType, RefreshTokenRequestType, RefreshTokenResponseType } from '@/lib/network/types/account';
import type { DefaultBodyType, PathParams } from 'msw';
import { delay, http, HttpResponse } from 'msw'
import { ErrorCode, ErrorHandler } from '../middleware/ErrorHandler';
import { generateAuth, parseAuth, validateRefreshToken, withAuth } from '../middleware/token';
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
  http.post<PathParams, EmailCheckRequestType, EmailCheckResponseType>('/api/emailCheck', async ({ request }) => {
    const requestJson = await request.json()
    const responseObj = {
      checkResult: false
    }
    const foundAccount = Object.values(accountList).find(account =>
      account.email === requestJson.email
    )
    if (foundAccount) {
      responseObj.checkResult = true
    }
    await delay(5000)
    return HttpResponse.json(responseObj, { status: 200, statusText: 'OK' })
  }),
  http.post('/api/login', ErrorHandler<LoginRequestType, LoginResponseType>(async ({ request }) => {
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
  http.post('/api/account/refresh', ErrorHandler<RefreshTokenRequestType, RefreshTokenResponseType>(async ({ request }) => {
    const requestJson = await request.json()
    const refrehsToken = await validateRefreshToken(requestJson.refreshToken)
    const tokens = await generateAuth(refrehsToken.accountId)
    return HttpResponse.json(tokens, {
      status: 200,
      statusText: 'OK'
    })
  })),
  http.get('/api/account/me', ErrorHandler<DefaultBodyType, MyInfoResponseType>(withAuth(async ({ request }) => {
    const token = await parseAuth(request.headers)
    return HttpResponse.json(accountList[token.payload.accountId])
  })))
]

export default handlers