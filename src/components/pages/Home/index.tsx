import Head from 'next/head';
import { useTranslation } from 'next-i18next'
import LanguageSelect from '@/components/i18n/LanguageSelect';
import EmailSubmitForm from './component/EmailSubmitForm';
import { HeroBottom, HeroBottomLine, HeroBottomMargin } from './styles/HeroBottom';
import { HeroContent, HeroContentBg, HeroContentBgShadow, HeroContentDetail, HeroContentDetailShell, HeroContentDetailContentLayout, HeroContentShell } from './styles/HeroContent';
import { HeroHead, HeroHeadContent, HeroHeadLayer, HeroHeadLogo, HeroHeadRightSide, HeroHeadSigninLink } from './styles/HeroHead';
import { HeroDescrpition1, HeroSection, HeroTitle } from './styles/HeroSection';

export default function Home() {
  const { t } = useTranslation(['common', 'page-home'])
  return (
    <>
      <Head>
        <title>{t('header.title')}</title>
        <meta name="description" content={t('header.description')} />
        <meta name="keywords" content={t('header.keywords')} />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
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
                  <HeroHeadSigninLink href="/login">
                    {t('head.signin')}
                  </HeroHeadSigninLink>
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
      </div>
    </>
  );
}