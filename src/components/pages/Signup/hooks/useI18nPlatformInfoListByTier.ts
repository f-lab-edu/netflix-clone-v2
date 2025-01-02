import type { PlatformInfoItem } from '../component/platform/PlatformInfoList';
import { useTranslation } from 'react-i18next';
import { ListItemDisplayOrder } from '../utils/ListItemDisplayOrder'

export default function useI18nPlatformInfoListByTier() {
  const { t } = useTranslation(['page-signup'])
  return {
    getPlatformInfoListByTier: (tier: MembershipPlanTier) => ListItemDisplayOrder.reduce((acc, cur) => {
      const value = t(`page-signup:platform.tier.${tier}.${cur}`, { defaultValue: '' })
      if (value) {
        acc.push({
          title: t(`page-signup:platform.platformAttrs.${cur}`, { defaultValue: '' }),
          value: value
        })
      }
      return acc
    }, [] as PlatformInfoItem[])
  }
}