import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import RadioInput from '@/components/ui/Form/RadioInput';
import useI18nPlatformInfoListByTier from '../../hooks/useI18nPlatformInfoListByTier';
import { SignupPlatformCardListCss } from '../../styles/SignupPlayform';
import { CardDisplayOrder } from '../../utils/CardDisplayOrder';
import PlatformInfoList from './PlatformInfoList';
import PlatformSlimCard from './PlatformSlimCard';

interface PlatformDetailSlimProps {
  selectedType: MembershipPlanTier
  onSelectedChange: (_v: MembershipPlanTier) => void
}

export default function PlatformDetailSlim({
  selectedType,
  onSelectedChange
}: PlatformDetailSlimProps) {
  const { t } = useTranslation(['page-signup'])
  const { getPlatformInfoListByTier } = useI18nPlatformInfoListByTier()

  const infoList = useMemo(() => {
    return getPlatformInfoListByTier(selectedType)
  }, [selectedType, getPlatformInfoListByTier])
  const cardList = useMemo(() => {
    return CardDisplayOrder.map((v, idx) => {
      return <RadioInput<MembershipPlanTier>
        key={`card-${idx}`}
        value={v}
        selectedValue={selectedType}
        onChangeValue={(v) => {
          if (v) {
            onSelectedChange(v)
          }
        }}
        inputLayoutProps={{
          label: <PlatformSlimCard
            value={v}
            title={t(`page-signup:platform.tier.${v}.title`)}
            sub={t(`page-signup:platform.tier.${v}.resolutionSimple`)}
            isChecked={selectedType === v}
          />
        }}
      />
    })
  }, [selectedType, onSelectedChange, t])
  return <>
    <div css={SignupPlatformCardListCss}>
      {cardList}
    </div>
    <PlatformInfoList large={false} infoList={infoList} />
  </>
}