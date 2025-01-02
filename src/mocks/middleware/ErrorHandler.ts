import type { ErrorResponse } from '../type/ErrorResponse';
import type { DefaultBodyType, HttpResponseResolver, PathParams } from 'msw';
import { HttpResponse } from 'msw';
import ErrorException from '../type/ErrorResponse';

export const ErrorCode = {
  AUTH_FAILED: -1,
  AUTH_EXPIRED: -2,
  WRONG_TOKEN_THROWN: -3,
  LOGIN_FAILED: -100
}

export function ErrorHandler<RequestBodyType extends DefaultBodyType = DefaultBodyType, ResponseBodyType extends DefaultBodyType = DefaultBodyType>(
  resolver: HttpResponseResolver<PathParams, RequestBodyType, ResponseBodyType>
): HttpResponseResolver<PathParams, RequestBodyType, ResponseBodyType | ErrorResponse> {
  return async (args) => {
    try {
      return resolver(args);
    } catch (e) {
      if (e instanceof ErrorException) {
        let errorStateCode = 200
        if (e.errorCode === ErrorCode.AUTH_FAILED) {
          errorStateCode = 401
        } else if (e.errorCode === ErrorCode.AUTH_EXPIRED) {
          errorStateCode = 403
        }
        return HttpResponse.json<ErrorResponse>({
          errorCode: e.errorCode,
          message: e.message
        }, {
          status: errorStateCode
        })
      } else {
        console.log(e)
        return HttpResponse.json<ErrorResponse>({
          errorCode: -999999,
          message: 'Unhandled error Thrown'
        }, {
          status: 500
        })
      }
    }
  };
}
