import type { GetStaticProps } from 'next';
import { getServerTranslations } from '@/lib/i18n/getServerTranslations';

export { default } from '@/components/pages/FirstProfile';

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => {
  return {
    props: {
      ...await getServerTranslations(locale || 'en', ['common', 'page-firstProfile'])
    },
  }
}
