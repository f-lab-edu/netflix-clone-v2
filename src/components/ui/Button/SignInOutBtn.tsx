import type { AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import { useMemo } from 'react';
import ConditionalRender from '@/components/ui/utils/ConditionalRender';
import useJWTs from '@/hooks/account/useJWTs';

interface SignInOutBtnProps {
  signInText: string
  signOutText: string
}

export default function SignInOutBtn({ signInText, signOutText, ...props }: SignInOutBtnProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick' | 'href'> & CssProps) {
  const { accessToken, removeJWT } = useJWTs()
  const hasSignined = useMemo(() => Boolean(accessToken), [accessToken])
  return <ConditionalRender.Boolean
    condition={hasSignined}
    render={{
      true: <Link {...props} onClick={removeJWT} href="/signout">
        {signOutText}
      </Link>,
      false: <Link {...props} href="/signin">
        {signInText}
      </Link>
    }}
  />
}