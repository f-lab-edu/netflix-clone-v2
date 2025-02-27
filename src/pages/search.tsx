import type { GetStaticProps } from 'next';
import { getServerTranslations } from '@/lib/i18n/getServerTranslations'

export { default } from '@/components/pages/Search'

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => {
  return {
    props: {
      ...await getServerTranslations(locale || 'en', ['common', 'page-browse'])
    },
  }
}
