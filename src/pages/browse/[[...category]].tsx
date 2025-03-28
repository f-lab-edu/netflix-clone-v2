import type { GetStaticProps } from 'next';
import { getServerTranslations } from '@/lib/i18n/getServerTranslations'

export { default } from '@/components/pages/Browse'

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => {
  return {
    props: {
      ...await getServerTranslations(locale || 'en', ['common', 'page-browse'])
    },
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}