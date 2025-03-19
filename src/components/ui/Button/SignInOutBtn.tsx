import type { AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import ConditionalRender from '@/components/utils/ConditionalRender';
import useJWTs from '@/hooks/account/useJWTs';

interface SignInOutBtnProps {
  signInText: string
  signOutText: string
}

export default function SignInOutBtn({ signInText, signOutText, ...props }: SignInOutBtnProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick' | 'href'> & CssProps) {
  const { removeJWT, hasLogin } = useJWTs()
  return <ConditionalRender.Boolean
    condition={hasLogin}
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
