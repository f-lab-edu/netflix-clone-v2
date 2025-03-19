import { useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useAccessTokenAtom, useRefreshTokenAtom } from '@/state/token/hooks';

interface UpdateJWTParams {
  accessToken: string
  refreshToken: string
}

export default function useJWTs() {
  const queryClient = useQueryClient()
  const [accessToken, setAccessToken] = useAccessTokenAtom()
  const [, setRefreshToken] = useRefreshTokenAtom()
  const hasLogin = useMemo(() => Boolean(accessToken), [accessToken])
  const updateJWT = ({ accessToken, refreshToken }: UpdateJWTParams) => {
    setAccessToken(accessToken)
    setRefreshToken(refreshToken)
    queryClient.clear()
  }
  const removeJWT = () => updateJWT({ accessToken: '', refreshToken: '' })
  return {
    hasLogin,
    accessToken,
    updateJWT,
    removeJWT
  }
}
