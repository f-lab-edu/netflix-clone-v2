import type { ReactNode } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import SignInOutBtn from '@/components/ui/Button/SignInOutBtn';
import ConditionalRender from '@/components/utils/ConditionalRender';
import NetflixLogo from '@assets/netflix/top-logo.svg'
import BaseLayout from '../BaseLayout';
import { BrowserLayoutFooterCss, BrowserLayoutHeaderCss, BrowserLayoutHeaderLeftAreaCss, BrowserLayoutHeaderLinkCss, BrowserLayoutHeaderRightAreaCss, BrowserLayoutMainCss, BrowserLayoutShellCss } from '../styles/BrowserLayoutStyle';
import { HeaderLoginLinkStyleCss } from '../styles/SignupLayoutStyle';
import BrowseMenuList from './component/BrowseMenuList';
import SearchInputField from './component/SearchInputField';
import useSearchFilter from './component/SearchInputField/hooks/useSearchFilter';

interface BrowserLayoutProps {
  children: ReactNode
  headerType?: 'noHeader' | 'normal' | 'browse'
}

export default function BrowserLayout({
  children,
  headerType
}: BrowserLayoutProps) {
  const { t } = useTranslation(['common'])
  const [searchFilterValue, onSearchFilterChange] = useSearchFilter()

  return <BaseLayout.Dark>
    <div css={BrowserLayoutShellCss}>
      <ConditionalRender
        condition={headerType ?? 'normal'}
        render={{
          noHeader: undefined,
          browse: <header css={[BrowserLayoutHeaderCss]}>
            <div css={BrowserLayoutHeaderLeftAreaCss}>
              <Link css={BrowserLayoutHeaderLinkCss} href="/">
                <NetflixLogo />
              </Link>
              <BrowseMenuList />
            </div>
            <div css={BrowserLayoutHeaderRightAreaCss}>
              {/* search bar */}
              <SearchInputField
                defaultValue={searchFilterValue}
                onChange={onSearchFilterChange}
              />
              {/* alarm */}
              {/* profile */}
            </div>
          </header>,
          normal: <header css={[BrowserLayoutHeaderCss]}>
            <Link css={BrowserLayoutHeaderLinkCss} href="/">
              <NetflixLogo />
            </Link>
            <SignInOutBtn
              css={HeaderLoginLinkStyleCss}
              signInText={t('head.signin')}
              signOutText={t('head.signout')}
            />
          </header>
        }}
      />
      <main css={BrowserLayoutMainCss}>
        {children}
      </main>
      <footer css={BrowserLayoutFooterCss}>

      </footer>
    </div>
  </BaseLayout.Dark>
}