import type { EmailCheckRequestType, EmailCheckResponseType, LoginRequestType, LoginResponseType, MyInfoResponseType, RefreshTokenRequestType, RefreshTokenResponseType, SignupRequestType, SignupResponseType } from '@/lib/network/types/account';
import type { DefaultBodyType, PathParams } from 'msw';
import { delay, http } from 'msw'
import { ErrorCode, ErrorHandler } from '../middleware/ErrorHandler';
import { generateAuth, parseAuth, validateRefreshToken, withAuth } from '../middleware/token';
import ErrorException from '../type/ErrorResponse';
import { createSuccessResponse } from '.';

let accountAutoId = 1
const accountList: {
  [key: number]: AccountBaseInfo
} = {
  1: {
    id: 1,
    email: 'test@test.com',
    emailVerified: false,
    password: 'test1234',
    phone: '',
    phoneVerified: false,
    policy: true,
    specialOffer: false
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
    return createSuccessResponse(responseObj)
  }),
  http.post('/api/signup', ErrorHandler<SignupRequestType, SignupResponseType>(async ({ request }) => {
    const requestJson = await request.json()
    const foundAccount = Object.values(accountList).find(account =>
      account.email === requestJson.email
    )
    if (foundAccount) {
      throw new ErrorException('Duplicate Email used', ErrorCode.DUPLICATE_EMAIL)
    }

    const newId = ++accountAutoId
    const newAccountInfo: AccountBaseInfo = {
      id: newId,
      ...requestJson,
      emailVerified: false,
      phone: '',
      phoneVerified: false
    }
    accountList[newId] = newAccountInfo
    return createSuccessResponse({
      result: true
    })
  })),
  http.post('/api/login', ErrorHandler<LoginRequestType, LoginResponseType>(async ({ request }) => {
    const requestJson = await request.json()
    const account = Object.values(accountList).find(
      (account) => account.email === requestJson.email && account.password === requestJson.password
    )
    if (!account) {
      throw new ErrorException('Login failed', ErrorCode.LOGIN_FAILED)
    }
    const tokens = await generateAuth(account.id)
    return createSuccessResponse(tokens)
  })),
  http.post('/api/account/refresh', ErrorHandler<RefreshTokenRequestType, RefreshTokenResponseType>(async ({ request }) => {
    const requestJson = await request.json()
    const refrehsToken = await validateRefreshToken(requestJson.refreshToken)
    const tokens = await generateAuth(refrehsToken.accountId)
    return createSuccessResponse(tokens)
  })),
  http.get('/api/account/me', ErrorHandler<DefaultBodyType, MyInfoResponseType>(withAuth(async ({ request }) => {
    const token = await parseAuth(request.headers)
    return createSuccessResponse({
      accountInfo: accountList[token.payload.accountId]
    })
  })))
]

export default handlers