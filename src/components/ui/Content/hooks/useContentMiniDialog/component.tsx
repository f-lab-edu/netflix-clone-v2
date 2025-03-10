import type { MotionDialogProps } from '@/components/ui/Dialog/MotionDialog';
import type { PortalDialogInterface } from '@/components/ui/Dialog/provider/PortalProvider/context';
import Image from 'next/image'
import MotionDialog from '@/components/ui/Dialog/MotionDialog';
import { ContentDetailShellCss, ContentDialogButtonAreaCss, ContentDialogImgShellCss, ContentDialogShellCss } from './style'

export default function MiniDialog({
  closePortal,
  content,
  ...props
}: PortalDialogInterface & MotionDialogProps & { content: Content }) {
  return <MotionDialog {...props}>
    <div
      tabIndex={-1}
      css={ContentDialogShellCss}
      ref={(el) => {
        el?.focus()
      }}
      onBlur={() => closePortal && closePortal()}
      onMouseLeave={() => closePortal && closePortal()}
    >
      <Image
        css={ContentDialogImgShellCss}
        src={content.thumbnail}
        alt="Harbin"
        width={320}
        height={180}
      />
      <div css={ContentDetailShellCss}>
        <div role="grid" css={ContentDialogButtonAreaCss}>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </div>
      </div>
    </div>
  </MotionDialog>
}