import type { Interpolation } from '@emotion/react';
import CheckedIcon from '@/assets/netflix/signup/checked-icon.svg'
import { PlatformCardBg, PlatformCardCheckedIconCss, PlatformCardCss, PlatformCardDefaultCss, PlatformCardSubCss, PlatformCardTitleCss } from '../../styles/PlatformCardStyle';
interface PlatformCardProps {
  value: MembershipPlanTier
  title: string
  sub: string
  isChecked: boolean
  alwaysBg?: boolean
  css?: Interpolation
  className?: string
}

export default function PlatformSlimCard({ value, title, sub, isChecked, alwaysBg, className }: Readonly<PlatformCardProps>) {
  return <div className={className} css={[PlatformCardCss, isChecked ? [PlatformCardBg[value]] : PlatformCardDefaultCss, alwaysBg ? PlatformCardBg[value] : []]}>
    <h2 css={PlatformCardTitleCss}>{title}</h2>
    <sub css={PlatformCardSubCss}>{sub}</sub>
    {isChecked && <div css={PlatformCardCheckedIconCss}>
      <CheckedIcon viewBox="0 0 24 22" />
    </div>}
  </div>
}