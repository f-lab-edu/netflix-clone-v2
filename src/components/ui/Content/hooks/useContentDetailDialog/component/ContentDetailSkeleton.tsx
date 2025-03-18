import type { MotionDialogProps } from '@/components/ui/Dialog/MotionDialog';
import type { PortalDialogInterface } from '@/components/ui/Dialog/provider/PortalProvider/context';
import Backdrop from '@/components/ui/Dialog/Backdrop';
import MotionDialog from '@/components/ui/Dialog/MotionDialog';
import ConditionalRender from '@/components/utils/ConditionalRender';
import { ContentDetailCloseBtn, ContentDetailControl, ContentDetailImage, ContentDetailImageArea, ContentDetailLayout, ContentDetailShell } from '../style';

export interface ContentDetailDialogProps extends MotionDialogProps {
  contentId: number
  hasBackdrop: boolean
}

export default function ContentDetailDialog({
  hasBackdrop,
  css,
  ...props
}: PortalDialogInterface & ContentDetailDialogProps) {
  return <>
    <ConditionalRender.Boolean
      condition={hasBackdrop}
      render={{
        true: <Backdrop css={css} opacity={.7} transition={props.options?.transition} />
      }}
    />
    <MotionDialog {...props} isFixed css={[
      css,
      ContentDetailShell
    ]}>
      <main css={ContentDetailLayout}>
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
    </MotionDialog>
  </>
}