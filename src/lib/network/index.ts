import type { RefreshTokenResponseType } from './types/account';
import type { ErrorResponse } from './types/error';
import type { HTTPError } from 'ky';
import ky from 'ky'
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './utils'

const baseApi = ky.extend({
  prefixUrl: '/api/',
  hooks: {
    beforeError: [
      async (error: HTTPError<ErrorResponse>) => {
        const { response } = error;
        if (response && response.body) {
          const json = await response.json()
          error.name = `API Error ${json.errorCode}`;
          error.message = JSON.stringify(json);
        }
        return error;
      }
    ],
    beforeRequest: [
      (request) => {
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem(ACCESS_TOKEN_KEY)
          if (token) {
            request.headers.set('Authorization', `Bearer ${token}`)
          }
        }
        return request
      }
    ]
  },
  retry: {
    limit: 1,
    statusCodes: [403],
    backoffLimit: 500,
  }
})
const api = baseApi.extend({
  hooks: {
    beforeRetry: [
      async ({ request }) => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)
        if (!refreshToken) return ky.stop
        const tokens = await baseApi.post('account/refresh', {
          json: {
            refreshToken
          }
        }).json<RefreshTokenResponseType>()
        localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken)
        localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken)
        request.headers.set('Authorization', `Bearer ${tokens.accessToken}`)
      }
    ]
  }
})
export default api