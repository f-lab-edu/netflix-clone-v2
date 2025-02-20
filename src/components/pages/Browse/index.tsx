import type { NextPageWithLayout } from '@/pages/_app';
// import { useParams } from 'next/navigation';
import { useState } from 'react';
import BrowserLayout from '@/components/layout/BrowserLayout';
import Carousel from '@/components/ui/Carousel';

const BrowsePage: NextPageWithLayout = () => {
  // TODO: use on other browse page
  // const { category } = useParams()
  const [contentItems] = useState<Content[]>(Array(30).fill(undefined).map((v, idx) => ({
    id: idx + 1,
    title: `title${idx + 1}`,
    description: '',
    actors: [],
    ageRestriction: 15,
    genres: [],
    hasNewEpisode: true,
    isTop10: false,
    keywords: [],
    previewVideo: '',
    rules: [],
    series: [],
    specific: [],
    thumbnail: '',
    uploadDate: 0
  })))
  return <div>
    <section>
      {/* TODO: Preview */}
      {/* TODO: genre title */}
      <h1></h1>
    </section>
    {/* TODO: list */}
    <Carousel.Content items={contentItems} title='title' />
  </div>
}
BrowsePage.getLayout = (page) => {
  return <BrowserLayout>{page}</BrowserLayout>
}
export default BrowsePage