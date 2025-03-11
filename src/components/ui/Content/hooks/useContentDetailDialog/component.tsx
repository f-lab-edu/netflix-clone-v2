import type { MotionDialogProps } from '@/components/ui/Dialog/MotionDialog';
import type { PortalDialogInterface } from '@/components/ui/Dialog/provider/PortalProvider/context';
import Backdrop from '@/components/ui/Dialog/Backdrop';
import MotionDialog from '@/components/ui/Dialog/MotionDialog';

export default function ContentDetailDialog({
  content,
  closePortal,
  ...props
}: PortalDialogInterface & MotionDialogProps & { content: Content }) {
  return <>
    <Backdrop opacity={.7} transition={props.options?.transition} />
    <MotionDialog {...props}>
      <div>
        content is empty
      </div>
    </MotionDialog>
  </>
}