import { PlatformInfoItemCss, PlatformInfoItemShellCss, PlatformInfoItemShellLargeCss, PlatformInfoItemShellSmallCss, PlatformInfoItemTitleCss, PlatformInfoItemValueCss } from '../../styles/PlatformInfoItemStyle'

interface PlatformInfoItemProps {
  title: string
  value: string
  large: boolean
}

export default function PlatformInfoItem({
  large, title, value
}: PlatformInfoItemProps) {

  return <li css={PlatformInfoItemCss}>
    <div css={[PlatformInfoItemShellCss, large ? PlatformInfoItemShellLargeCss : PlatformInfoItemShellSmallCss]}>
      <div css={PlatformInfoItemTitleCss}>{title}</div>
      <div css={PlatformInfoItemValueCss}>{value}</div>
    </div>
  </li>
}