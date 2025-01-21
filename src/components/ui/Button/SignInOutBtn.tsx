import Link from 'next/link';
import { useMemo } from 'react';
import ConditionalRender from '@/components/ui/utils/ConditionalRender';
import useJWTs from '@/hooks/account/useJWTs';

interface SignInOutBtnProps {
  signInText: string
  signOutText: string
}

export default function SignInOutBtn({ signInText, signOutText, className }: SignInOutBtnProps & CssProps) {
  const { accessToken, removeJWT } = useJWTs()
  const hasSignined = useMemo(() => Boolean(accessToken), [accessToken])
  return <ConditionalRender.Boolean
    condition={hasSignined}
    render={{
      true: <Link className={className} onClick={removeJWT} href="/">
        {signOutText}
      </Link>,
      false: <Link className={className} href="/signin">
        {signInText}
      </Link>
    }}
  />
}