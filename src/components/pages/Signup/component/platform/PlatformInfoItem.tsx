import { PlatformInfoItemCss, PlatformInfoItemShellCss, PlatformInfoItemShellLargeCss, PlatformInfoItemShellSmallCss, PlatformInfoItemTitleCss, PlatformInfoItemValueCss } from '../../styles/PlatformInfoItemStyle'

interface PlatformInfoItemProps {
  title: string
  value: string | number
  large: boolean
}

export default function PlatformInfoItem({
  large, title, value
}: Readonly<PlatformInfoItemProps>) {

  return <li css={PlatformInfoItemCss}>
    <div css={[PlatformInfoItemShellCss, large ? PlatformInfoItemShellLargeCss : PlatformInfoItemShellSmallCss]}>
      <h1 css={PlatformInfoItemTitleCss} role="term">{title}</h1>
      <span css={PlatformInfoItemValueCss} role="definition">{value}</span>
    </div>
  </li>
}
