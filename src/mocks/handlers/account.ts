import type { EmailCheckRequestType, EmailCheckResponseType, SigninRequestType, SigninResponseType, MyInfoResponseType, RefreshTokenRequestType, RefreshTokenResponseType, SignupRequestType, SignupResponseType } from '@/lib/network/types/account';
import type { DefaultBodyType, PathParams } from 'msw';
import { delay, http } from 'msw'
import { ErrorCode, ErrorHandler } from '../middleware/ErrorHandler';
import { generateAuth, parseAuth, validateRefreshToken, withAuth } from '../middleware/token';
import { GetMSWAccountById, GetMSWAllAcount, InsertMSWAccount } from '../mockDataStorage/account';
import ErrorException from '../type/ErrorResponse';
import { createSuccessResponse } from '.';

const handlers = [
  http.post<PathParams, EmailCheckRequestType, EmailCheckResponseType>('/api/emailCheck', async ({ request }) => {
    const requestJson = await request.json()
    const responseObj = {
      checkResult: false
    }
    const accountList = GetMSWAllAcount()
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
    const accountList = GetMSWAllAcount()
    const foundAccount = Object.values(accountList).find(account =>
      account.email === requestJson.email
    )
    if (foundAccount) {
      throw new ErrorException('Duplicate Email used', ErrorCode.DUPLICATE_EMAIL)
    }
    InsertMSWAccount({
      ...requestJson,
      emailVerified: false,
      defaultProfileId: 0,
      phone: '',
      phoneVerified: false,
      billingPolicies: {
        billingAgree: false,
        paymentGateWayPolicy: false,
        privatePolicy: false,
        transferInformationAbroadPolicy: false,
        transferInformationToThirdPartiesPolicy: false
      }
    })
    return createSuccessResponse({
      result: true
    })
  })),
  http.post('/api/signin', ErrorHandler<SigninRequestType, SigninResponseType>(async ({ request }) => {
    const requestJson = await request.json()
    const accountList = GetMSWAllAcount()
    const account = Object.values(accountList).find(
      (account) => {
        if (account.password !== requestJson.password) return false
        if (account.email === requestJson.emailOrPhone) return true
        if (account.phoneVerified && account.phone === requestJson.emailOrPhone) return false
        return false
      }
    )
    if (!account) {
      throw new ErrorException('Login failed', ErrorCode.SIGNIN_FAILED)
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
    const accountInfo = GetMSWAccountById(token.payload.accountId)
    return createSuccessResponse({
      accountInfo: accountInfo
    })
  })))
]

export default handlers
