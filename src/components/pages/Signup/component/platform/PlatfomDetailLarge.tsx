import type { PlatformInfoItem } from './PlatformInfoList';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import RadioInput from '@/components/ui/Form/RadioInput';
import useI18nPlatformInfoListByTier from '../../hooks/useI18nPlatformInfoListByTier';
import { PlatformDetailLargeCardCss, PlatformDetailLargeCardCssSelected } from '../../styles/PlatformCardStyle';
import { SignupPlatformLargeCardListCss } from '../../styles/SignupPlayform';
import { CardDisplayOrder } from '../../utils/CardDisplayOrder';
import PlatformInfoList from './PlatformInfoList';
import PlatformSlimCard from './PlatformSlimCard';
interface PlatformDetailLargeProps {
  selectedType: MembershipPlanTier
  onSelectedChange: (_v: MembershipPlanTier) => void
}

export default function PlatformDetailLarge({
  selectedType,
  onSelectedChange
}: PlatformDetailLargeProps) {
  const { t } = useTranslation(['page-signup'])
  const { getPlatformInfoListByTier } = useI18nPlatformInfoListByTier()
  const infoList = useMemo(() => {
    return CardDisplayOrder.reduce((acc, tier) => {
      acc[tier] = getPlatformInfoListByTier(tier)
      return acc
      // eslint-disable-next-line no-unused-vars
    }, {} as { [k in MembershipPlanTier]: PlatformInfoItem[] })
  }, [getPlatformInfoListByTier])

  return <>
    <div css={SignupPlatformLargeCardListCss}>
      {CardDisplayOrder.map((v) => {
        const selected = selectedType === v
        return <RadioInput<MembershipPlanTier>
          key={`radio-${v}`}
          value={v}
          selectedValue={selectedType}
          onChangeValue={(v) => {
            if (v) {
              onSelectedChange(v)
            }
          }}
          inputLayoutProps={{
            label: <div css={[PlatformDetailLargeCardCss, selected && PlatformDetailLargeCardCssSelected]}>
              <PlatformSlimCard
                css={{ margin: '8px', width: 'auto' }}
                alwaysBg
                value={v}
                title={t(`page-signup:platform.tier.${v}.title`)}
                sub={t(`page-signup:platform.tier.${v}.resolutionSimple`)}
                isChecked={selected}
              />
              <PlatformInfoList large={true} infoList={infoList[v]} />
            </div>
          }}
        />
      })}
    </div>
  </>
}