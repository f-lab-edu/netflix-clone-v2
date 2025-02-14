import type { NextPageWithLayout } from '@/pages/_app';
import BrowserLayout from '@/components/layout/BrowserLayout';

const BrowsePage: NextPageWithLayout = () => {
  // const { category } = useParams()

  return <div>
    <section>
      {/* TODO: Preview */}
      {/* TODO: genre title */}
      <h1></h1>
    </section>
    {/* TODO: list */}
  </div>
}
BrowsePage.getLayout = (page) => {
  return <BrowserLayout>{page}</BrowserLayout>
}
export default BrowsePage