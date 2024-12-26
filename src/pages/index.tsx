import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import config from '../../next-i18next.config';

export default function Home() {
  const { t } = useTranslation('common')
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
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => {
  return {
    props: {
      ...await serverSideTranslations(locale ?? 'en', [
        'common',
      ], config),
    },
  }
}