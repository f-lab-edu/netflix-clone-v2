import { ContentDetailCloseBtn, ContentDetailControl, ContentDetailImage, ContentDetailImageArea, ContentDetailLayout } from '../style';

export default function ContentDetailSkeleton() {
  return <main css={ContentDetailLayout}>
    <section aria-label="image content" css={ContentDetailImageArea}>
      <img
        css={ContentDetailImage}
        width="848"
        height="477"
        alt={'skeleton'}
      />
      <div role="controll" css={ContentDetailControl}>
        <button css={ContentDetailCloseBtn} />
        <div>
          <h2 />
          <div>
            <button />
            <button />
          </div>
        </div>
        <button>
          {/* Mute */}
        </button>
      </div>
    </section>
    <section aria-label="text content">
      <div role="contentinfo">
        <p />
        <p />
      </div>
      <div role="contentinfo">
        <p />
        <p />
        <p />
      </div>
    </section>
  </main>
}
