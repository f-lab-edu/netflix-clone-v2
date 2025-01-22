import { useAtom } from 'jotai';
import { accessTokenAtom, refreshTokenAtom } from '@/state/Token';

interface UpdateJWTParams {
  accessToken: string
  refreshToken: string
}

export default function useJWTs() {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom)
  const [, setRefreshToken] = useAtom(refreshTokenAtom)
  const updateJWT = ({ accessToken, refreshToken }: UpdateJWTParams) => {
    setAccessToken(accessToken)
    setRefreshToken(refreshToken)
  }
  const removeJWT = () => updateJWT({ accessToken: '', refreshToken: '' })
  return {
    accessToken,
    updateJWT,
    removeJWT
  }
}