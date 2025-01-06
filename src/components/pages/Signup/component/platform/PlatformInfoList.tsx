import { PlatformInfoListStyle } from '../../styles/PlatformInfoListStyle';
import PlatformInfoItem from './PlatformInfoItem';

export type PlatformInfoItem = { title: string, value: string }

interface PlatformInfoListProps {
  large: boolean
  infoList: PlatformInfoItem[]
}

export default function PlatformInfoList({ large, infoList }: PlatformInfoListProps) {
  return <ul css={PlatformInfoListStyle} role="list">
    {infoList.map((item, idx) => {
      return <PlatformInfoItem key={`item-${idx}`} {...item} large={large}></PlatformInfoItem>
    })}
  </ul>
}