import type { PlatformInfoItem } from '../component/platform/PlatformInfoList';
import type { i18n } from 'i18next';
import { ListItemDisplayOrder } from './ListItemDisplayOrder'

export const getPlatformInfoListByTier = (i18n: i18n, tier: MembershipPlanTier) => ListItemDisplayOrder.reduce((acc, cur) => {
  const value = i18n.t(`page-signup:platform.tier.${tier}.${cur}`, { defaultValue: '' })
  if (value) {
    acc.push({
      title: i18n.t(`page-signup:platform.platformAttrs.${cur}`, { defaultValue: '' }),
      value: cur === 'price' ? i18n.format(value, 'krwCurrency', i18n.language) : value
    })
  }
  return acc
}, [] as PlatformInfoItem[])