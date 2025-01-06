import { PlatformInfoItemCss, PlatformInfoItemShellCss, PlatformInfoItemShellLargeCss, PlatformInfoItemShellSmallCss, PlatformInfoItemTitleCss, PlatformInfoItemValueCss } from '../../styles/PlatformInfoItemStyle'

interface PlatformInfoItemProps {
  title: string
  value: string
  large: boolean
}

export default function PlatformInfoItem({
  large, title, value
}: Readonly<PlatformInfoItemProps>) {

  return <li css={PlatformInfoItemCss} role="listitem">
    <div css={[PlatformInfoItemShellCss, large ? PlatformInfoItemShellLargeCss : PlatformInfoItemShellSmallCss]}>
      <h1 css={PlatformInfoItemTitleCss}>{title}</h1>
      <span css={PlatformInfoItemValueCss} role="contentinfo">{value}</span>
    </div>
  </li>
}