import type { RefreshTokenResponseType } from './types/account';
import type { ErrorResponse } from './types/error';
import type { HTTPError } from 'ky';
import ky from 'ky'
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './utils'

const isServer = typeof window === 'undefined'

const path = isServer ? 'http://localhost/api/' : '/api/'

const baseApi = ky.extend({
  prefixUrl: path,
  hooks: {
    beforeError: [
      async (error: HTTPError<ErrorResponse>) => {
        const { response } = error;
        if (response && response.body) {
          try {
            const json = await response.json()
            error.name = `API Error ${json.errorCode}`;
            error.message = JSON.stringify(json);
          } catch {
            return error
          }
        }
        return error;
      }
    ],
    beforeRequest: [
      (request) => {
        if (!isServer) {
          const token = localStorage.getItem(ACCESS_TOKEN_KEY)?.replace(/"/g, '')
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
        if (!isServer) {
          const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)?.replace(/"/g, '')
          if (!refreshToken) return ky.stop
          const tokens = await baseApi.post('account/refresh', {
            json: {
              refreshToken
            }
          }).json<RefreshTokenResponseType>()
          localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(tokens.accessToken))
          localStorage.setItem(REFRESH_TOKEN_KEY, JSON.stringify(tokens.refreshToken))
          request.headers.set('Authorization', `Bearer ${tokens.accessToken}`)
        }
      }
    ]
  }
})
export default api