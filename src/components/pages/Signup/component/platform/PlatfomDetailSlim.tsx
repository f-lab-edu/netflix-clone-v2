import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import LabelRadio from '@/components/ui/Form/LabelRadio';
import { SignupPlatformCardListCss } from '../../styles/SignupPlayform';
import { CardDisplayOrder } from '../../utils/CardDisplayOrder';
import { getPlatformInfoListByTier } from '../../utils/getPlatformInfoListByTier';
import PlatformInfoList from './PlatformInfoList';
import PlatformSlimCard from './PlatformSlimCard';

interface PlatformDetailSlimProps {
  selectedType: MembershipPlanTier
  onSelectedChange: (_v: MembershipPlanTier) => void
}

export default function PlatformDetailSlim({
  selectedType,
  onSelectedChange
}: Readonly<PlatformDetailSlimProps>) {
  const { t, i18n } = useTranslation(['page-signup'])

  const infoList = useMemo(() => {
    return getPlatformInfoListByTier(i18n, selectedType)
  }, [selectedType, i18n])
  const cardList = useMemo(() => {
    return CardDisplayOrder.map((v) => {
      return <LabelRadio
        key={`card-${v}`}
        value={v}
        name="platformCard"
        onChange={() => {
          if (v) {
            onSelectedChange(v)
          }
        }}
      >
        <PlatformSlimCard
          value={v}
          title={t(`page-signup:platform.tier.${v}.title`)}
          sub={t(`page-signup:platform.tier.${v}.resolutionSimple`)}
          isChecked={selectedType === v}
        />
      </LabelRadio>
    })
  }, [selectedType, onSelectedChange, t])
  return <>
    <div css={SignupPlatformCardListCss}>
      {cardList}
    </div>
    <PlatformInfoList large={false} infoList={infoList} />
  </>
}