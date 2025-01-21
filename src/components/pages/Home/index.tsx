import type { NextPageWithLayout } from '@/pages/_app';
import { useTranslation } from 'next-i18next'
import LanguageSelect from '@/components/i18n/LanguageSelect';
import BaseLayout from '@/components/layout/BaseLayout';
import SignInOutBtn from '@/components/ui/Button/SignInOutBtn';
import EmailSubmitForm from './component/EmailSubmitForm';
import { HeroBottom, HeroBottomLine, HeroBottomMargin } from './styles/HeroBottom';
import { HeroContent, HeroContentBg, HeroContentBgShadow, HeroContentDetail, HeroContentDetailShell, HeroContentDetailContentLayout, HeroContentShell } from './styles/HeroContent';
import { HeroHead, HeroHeadContent, HeroHeadLayer, HeroHeadLogo, HeroHeadRightSide, HeroHeadSigninOutLinkCss } from './styles/HeroHead';
import { HeroDescrpition1, HeroSection, HeroTitle } from './styles/HeroSection';

const Home: NextPageWithLayout = () => {
  const { t } = useTranslation(['common', 'page-home'])
  return (
    <HeroSection>
      <HeroHead>
        <HeroHeadLayer>
          <HeroHeadContent>
            <div>
              <HeroHeadLogo></HeroHeadLogo>
            </div>
            <HeroHeadRightSide>
              <div></div>
              <LanguageSelect />
              <SignInOutBtn
                css={HeroHeadSigninOutLinkCss}
                signInText={t('head.signin')}
                signOutText={t('head.signout')}
              />
            </HeroHeadRightSide>
          </HeroHeadContent>
        </HeroHeadLayer>
      </HeroHead>
      <HeroContentShell>
        <HeroContent>
          <HeroContentBg>
            <HeroContentBgShadow></HeroContentBgShadow>
          </HeroContentBg>
          <HeroContentDetail>
            <HeroContentDetailShell>
              <HeroContentDetailContentLayout>
                <HeroTitle>
                  {t('page-home:section1.title')}
                </HeroTitle>
                <HeroDescrpition1>
                  {t('page-home:section1.desc1')}
                </HeroDescrpition1>
                <EmailSubmitForm />
              </HeroContentDetailContentLayout>
            </HeroContentDetailShell>
            <HeroBottom>
              <div>
                <HeroBottomLine></HeroBottomLine>
              </div>
              <HeroBottomMargin></HeroBottomMargin>
            </HeroBottom>
          </HeroContentDetail>
        </HeroContent>
      </HeroContentShell>
    </HeroSection>
  )
}

Home.getLayout = (page) => {
  return <BaseLayout>{page}</BaseLayout>
}

export default Home