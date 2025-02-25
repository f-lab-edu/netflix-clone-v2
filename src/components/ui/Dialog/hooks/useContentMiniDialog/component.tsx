import type { MotionDialogProps } from '../../component/MotionDialog';
import type { PortalDialogInterface } from '@/provider/PortalProvider/context';
import Image from 'next/image'
import MotionDialog from '../../component/MotionDialog'
import { ContentDetailShellCss, ContentDialogButtonAreaCss, ContentDialogImgShellCss, ContentDialogShellCss } from './style'

export default function MiniDialog({
  closePortal,
  ...props
}: PortalDialogInterface & MotionDialogProps) {
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
        src='/netflix/movies/thunbnail/harbin.png'
        alt="Harbin"
        width={320}
        height={180}
      />
      <div css={ContentDetailShellCss}>
        <div role="grid" css={ContentDialogButtonAreaCss}>
          sdfsdfsdfsdfsdfsdfsdfsdfsdfsdf
          sdfsdfsdfsdfsdfsdfsdfsdfsdfsdf
        </div>
      </div>
    </div>
  </MotionDialog>
}