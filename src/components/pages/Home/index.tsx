import Head from 'next/head';
import { useTranslation } from 'next-i18next'
import { HeroBottom, HeroBottomLine, HeroBottomMargin } from './styles/HeroBottom';
import { HeroContent, HeroContentBg, HeroContentBgShadow, HeroContentDetail, HeroContentDetailShell, HeroContentDetailContentLayout, HeroContentShell } from './styles/HeroContent';
import { HeroHead, HeroHeadContent, HeroHeadLayer, HeroHeadLogo, HeroHeadRightSide, HeroHeadSigninLink } from './styles/HeroHead';
import { HeroDescrpition1, HeroDescrpition2, HeroSection, HeroTitle } from './styles/HeroSection';
import { TextDisplay } from '@/components/ui/Font/TextDisplayStyle';
import { cx } from '@emotion/css';
import { useTheme } from '@emotion/react';

export default function Home() {
  const { t } = useTranslation(['common', 'page-home'])
  const theme = useTheme()
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
        <section className={cx(HeroSection)}>
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
              <HeroContentDetail>
                <HeroContentDetailShell>
                  <HeroContentDetailContentLayout>
                    <h1 className={cx(TextDisplay(theme), HeroTitle)}>
                      {t('page-home:section1.title')}
                    </h1>
                    <p className={cx(TextDisplay(theme), HeroDescrpition1)}>
                      {t('page-home:section1.desc1')}
                    </p>
                    <form>
                      <h3 className={cx(TextDisplay(theme), HeroDescrpition2)}>
                        {t('page-home:section1.desc2')}
                      </h3>
                    </form>
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
        </section>
      </div>
    </>
  );
}