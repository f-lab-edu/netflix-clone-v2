import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import useMembershipByPlan from '@/hooks/Query/membership/useMembershipByPlan';
import { PlatformInfoListStyle } from '../../styles/PlatformInfoListStyle';
import PlatformInfoItem from './PlatformInfoItem';

export type PlatformInfoItem = { title: string, value: string | number }

interface PlatformInfoListProps {
  large: boolean
  plan: MembershipPlanTier
}

export default function PlatformInfoList({ large, plan }: Readonly<PlatformInfoListProps>) {
  const { data } = useMembershipByPlan(plan)
  const { i18n, t } = useTranslation(['page-signup'])
  const infoList = useMemo(() => {
    const list: PlatformInfoItem[] = []
    if (!data) return list
    // price
    list.push({
      title: t('page-signup:platform.platformAttrs.price'),
      value: i18n.format(data.price, 'krwCurrency', i18n.language)
    })
    // quality
    list.push({
      title: t('page-signup:platform.platformAttrs.quality'),
      value: t(`page-signup:platform.maxContentResolutionSimple.${data.maxContentResolution}`),
    })
    // resolution
    list.push({
      title: t('page-signup:platform.platformAttrs.resolution'),
      value: t(`page-signup:platform.maxContentResolution.${data.maxContentResolution}`),
    })
    // audio
    if (data.soundQuality) {
      list.push({
        title: t('page-signup:platform.platformAttrs.audio'),
        value: t('page-signup:platform.soundQuality.immersive'),
      })
    }
    // devices
    list.push({
      title: t('page-signup:platform.platformAttrs.devices'),
      value: data.device.map(v => t(`page-signup:platform.deviceType.${v}`)).join(', ')
    })
    // watch
    list.push({
      title: t('page-signup:platform.platformAttrs.watch'),
      value: data.maxWatcherCount
    })
    // download
    list.push({
      title: t('page-signup:platform.platformAttrs.download'),
      value: data.saveAllowedDeviceNumber
    })
    // ads
    list.push({
      title: t('page-signup:platform.platformAttrs.ads'),
      value: t(`page-signup:platform.ads.${data.ads ? 'true' : 'false'}`)
    })
    return list
  }, [i18n, data, t])

  return <ul css={PlatformInfoListStyle}>
    {infoList.map((item, idx) => {
      return <PlatformInfoItem key={`item-${idx}`} {...item} large={large} />
    })}
  </ul>
}