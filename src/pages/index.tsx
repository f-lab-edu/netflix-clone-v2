import type { GetStaticProps } from 'next';
import I18nConfig from '@I18nConfig';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export { default } from '@components/pages/Home'

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => {
  return {
    props: {
      ...await serverSideTranslations(locale ?? 'en', [
        'common', 'page-home'
      ], I18nConfig),
    },
  }
}