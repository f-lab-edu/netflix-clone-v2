import type { GetServerSideProps } from 'next';

export { default } from '@/components/pages/Review/templates/ReviewWritePage'

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      contentId: context.params?.contentId
    }
  }
}
