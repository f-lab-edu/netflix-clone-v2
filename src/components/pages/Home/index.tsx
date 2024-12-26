import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { HeroBottom, HeroBottomLine, HeroBottomMargin } from './styles/HeroBottom';
import { HeroContent, HeroContentBg, HeroContentBgShadow, HeroContentShell } from './styles/HeroContent';
import { HeroHead, HeroHeadContent, HeroHeadLayer, HeroHeadLogo, HeroHeadRightSide, HeroHeadSigninLink } from './styles/HeroHead';
import { HeroSection } from './styles/HeroSection';

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
                  <select></select>
                  <HeroHeadSigninLink href="/">
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
              <HeroBottom>
                <div>
                  <HeroBottomLine></HeroBottomLine>
                </div>
                <HeroBottomMargin></HeroBottomMargin>
              </HeroBottom>
            </HeroContent>
          </HeroContentShell>
        </HeroSection>
      </div>
    </>
  );
}