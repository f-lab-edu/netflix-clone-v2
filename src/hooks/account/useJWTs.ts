import { useQueryClient } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { accessTokenAtom, refreshTokenAtom } from '@/state/Token';

interface UpdateJWTParams {
  accessToken: string
  refreshToken: string
}

export default function useJWTs() {
  const queryClient = useQueryClient()
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom)
  const [, setRefreshToken] = useAtom(refreshTokenAtom)
  const updateJWT = ({ accessToken, refreshToken }: UpdateJWTParams) => {
    setAccessToken(accessToken)
    setRefreshToken(refreshToken)
    queryClient.clear()
  }
  const removeJWT = () => updateJWT({ accessToken: '', refreshToken: '' })
  return {
    accessToken,
    updateJWT,
    removeJWT
  }
}