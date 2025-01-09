import type { PlatformInfoItem } from './PlatformInfoList';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import LabelRadio from '@/components/ui/Form/LabelRadio';
import { PlatformDetailLargeCardCss, PlatformDetailLargeCardCssSelected } from '../../styles/PlatformCardStyle';
import { SignupPlatformLargeCardListCss } from '../../styles/SignupPlayform';
import { CardDisplayOrder } from '../../utils/CardDisplayOrder';
import { getPlatformInfoListByTier } from '../../utils/getPlatformInfoListByTier';
import PlatformInfoList from './PlatformInfoList';
import PlatformSlimCard from './PlatformSlimCard';
interface PlatformDetailLargeProps {
  selectedType: MembershipPlanTier
  onSelectedChange: (_v: MembershipPlanTier) => void
}

export default function PlatformDetailLarge({
  selectedType,
  onSelectedChange
}: Readonly<PlatformDetailLargeProps>) {
  const { t, i18n } = useTranslation(['page-signup'])
  const infoList = useMemo(() => {
    return CardDisplayOrder.reduce((acc, tier) => {
      acc[tier] = getPlatformInfoListByTier(i18n, tier)
      return acc
      // eslint-disable-next-line no-unused-vars
    }, {} as { [k in MembershipPlanTier]: PlatformInfoItem[] })
  }, [i18n])

  return <div css={SignupPlatformLargeCardListCss}>
    {CardDisplayOrder.map((v) => {
      const selected = selectedType === v
      return <LabelRadio key={`radio-${v}`}
        value={v}
        name="platformCard"
        css={[PlatformDetailLargeCardCss, selected && PlatformDetailLargeCardCssSelected]}
        onChange={() => {
          onSelectedChange(v)
        }}
      >
        <PlatformSlimCard
          css={{ margin: '8px', width: 'auto' }}
          alwaysBg
          value={v}
          title={t(`page-signup:platform.tier.${v}.title`)}
          sub={t(`page-signup:platform.tier.${v}.resolutionSimple`)}
          isChecked={selected}
        />
        <PlatformInfoList large={true} infoList={infoList[v]} />
      </LabelRadio>
    })}
  </div>
}