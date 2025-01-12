import type { JWTPayload } from 'jose';
import type { DefaultBodyType, HttpResponseResolver, PathParams } from 'msw';
import { jwtDecrypt, jwtVerify, SignJWT } from 'jose'
import ErrorException from '../type/ErrorResponse';
import { ErrorCode } from './ErrorHandler';

interface JwtCustomPayload {
  isRefreshToken: boolean
  accountId: number
}

type JwtPayloadType = JWTPayload & JwtCustomPayload

const secret = new TextEncoder().encode(
  'FciQubnp5uouLKK8s27hI6UpAfSuf9rjBMC3lyzjqqilYcc9X9L0SH5wcXUDCVAFO0S5YtIEnD3I4LEGuhsPKDPRZqDAgdFyNwus',
)

async function generateJWT(accountId: number, isRefreshToken: boolean) {
  const token = await new SignJWT({
    accountId,
    isRefreshToken
  }).sign(secret)
  return token
}

export async function generateAuth(accountId: number) {
  const accessToken = await generateJWT(accountId, false)
  const refreshToken = await generateJWT(accountId, true)
  return {
    accessToken,
    refreshToken
  }
}

export function withAuth<RequestBodyType extends DefaultBodyType, ResponseBodyType extends DefaultBodyType>(
  resolver: HttpResponseResolver
): HttpResponseResolver<PathParams, RequestBodyType, ResponseBodyType> {
  // @ts-expect-error - ignore type checking for now
  return async (args) => {
    const { request } = args;

    const authHeader = request.headers.get('Authorization');

    if (!authHeader) {
      throw new ErrorException('Invalid token format, Authorization header must be in the format: Bearer <token>', ErrorCode.AUTH_FAILED)
    }

    const [scheme, token] = authHeader.split(' ');
    if (scheme !== 'Bearer' || !token) {
      throw new ErrorException('Invalid token format, Authorization header must be in the format: Bearer <token>', ErrorCode.AUTH_FAILED)
    }
    try {
      const isVerified = await jwtVerify<JwtPayloadType>(token, secret)
      if (isVerified.payload.isRefreshToken) {
        throw new ErrorException('Refresh token thrown', ErrorCode.WRONG_TOKEN_THROWN)
      }
      return resolver(args);
    } catch {
      throw new ErrorException('Token Verification failed, Please check token', ErrorCode.AUTH_EXPIRED)
    }
  };
}

export async function parseAuth(header: Headers) {
  const parsedHeader = String(header.get('Authorization') || ' ').split(' ');
  try {
    const result = await jwtDecrypt<JwtPayloadType>(parsedHeader[1], secret)
    if (!result) throw new Error()
    return result
  } catch {
    throw new ErrorException('Token Verification failed, Please check token', ErrorCode.AUTH_EXPIRED)
  }
}