import type { MotionDialogProps } from '@/components/ui/Dialog/MotionDialog';
import type { PortalDialogInterface } from '@/components/ui/Dialog/provider/PortalProvider/context';
import Backdrop from '@/components/ui/Dialog/Backdrop';
import MotionDialog from '@/components/ui/Dialog/MotionDialog';
import ConditionalRender from '@/components/utils/ConditionalRender';
import SuspenseErrorBoundary from '@/components/utils/SuspenseErrorBoundary';
import { ContentDetailShell } from '../style';
import ContentDetailContent from './ContentDetailContent';

export type ContentDetailDialogProps = MotionDialogProps & PortalDialogInterface & {
  contentId: number
  hasBackdrop: boolean
}

export default function ContentDetailDialog({
  hasBackdrop,
  css,
  ...props
}: ContentDetailDialogProps) {
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
      <SuspenseErrorBoundary
        loadingFallback={<ContentDetailContent.Skeleton />}
        errorFallback={(errorProps) => <ContentDetailContent.Error {...errorProps} {...props} />}
      >
        <ContentDetailContent
          {...props}
        />
      </SuspenseErrorBoundary>
    </MotionDialog>
  </>
}
