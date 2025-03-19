import type { FallbackProps } from 'react-error-boundary';
import { ContentDetailImageArea, ContentDetailLayout } from '../style';

export default function ContentDetailError({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return <main css={ContentDetailLayout}>
    <section aria-label="error content" css={ContentDetailImageArea}>
      <div>
        {error}
      </div>
      <button onClick={resetErrorBoundary}>
        reset
      </button>
    </section>
  </main>
}
