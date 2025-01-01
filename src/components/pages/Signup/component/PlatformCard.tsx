import CheckedIcon from '@/assets/netflix/signup/checked-icon.svg'
import { PlatformCardActivedCss, PlatformCardCheckedIconCss, PlatformCardCss, PlatformCardDefaultCss, PlatformCardSubCss, PlatformCardTitleCss } from '../styles/PlatformCardStyle';
interface PlatformCardProps {
  title: string
  sub: string
  isChecked: boolean
}

export default function PlatformCard({ title, sub, isChecked }: PlatformCardProps) {
  return <div css={[PlatformCardCss, isChecked ? PlatformCardActivedCss : PlatformCardDefaultCss]}>
    <h2 css={PlatformCardTitleCss}>{title}</h2>
    <sub css={PlatformCardSubCss}>{sub}</sub>
    {isChecked && <div css={PlatformCardCheckedIconCss}>
      <CheckedIcon viewBox="0 0 24 22" />
    </div>}
  </div>
}