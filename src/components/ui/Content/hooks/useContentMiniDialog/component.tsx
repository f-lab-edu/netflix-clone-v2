import type { MotionDialogProps } from '@/components/ui/Dialog/MotionDialog';
import type { PortalDialogInterface } from '@/components/ui/Dialog/provider/PortalProvider/context';
import type { KeyboardEventHandler, MouseEventHandler } from 'react';
import Image from 'next/image'
import MotionDialog from '@/components/ui/Dialog/MotionDialog';
import { ContentDetailShellCss, ContentDialogButtonAreaCss, ContentDialogImgShellCss, ContentDialogShellCss } from './style'

export interface MiniDialogProps extends MotionDialogProps {
  content: Content
  onClick?: MouseEventHandler
  onKeyUp?: KeyboardEventHandler
}

export default function MiniDialog({
  closePortal,
  content,
  onClick,
  onKeyUp,
  ...props
}: PortalDialogInterface & MiniDialogProps) {
  return <MotionDialog {...props}>
    <div
      tabIndex={-1}
      css={ContentDialogShellCss}
      ref={(el) => {
        el?.focus()
      }}
      onClick={onClick}
      onKeyUp={onKeyUp}
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
