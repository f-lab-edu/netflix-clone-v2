import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import LabelRadio from '@/components/ui/Form/LabelRadio';
import useMembershipList from '@/hooks/Query/membership/useMembershipList';
import { SignupPlatformCardListCss } from '../../styles/SignupPlayform';
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
  const { data } = useMembershipList()
  const { t } = useTranslation(['page-signup'])

  const cardList = useMemo(() => {
    return data.list.map((v) => {
      return <LabelRadio
        key={`card-${v.plan}`}
        value={v.plan}
        name="platformCard"
        onChange={() => {
          if (v) {
            onSelectedChange(v.plan)
          }
        }}
      >
        <PlatformSlimCard
          value={v.plan}
          title={t(`page-signup:platform.tierTitles.${v.plan}`)}
          sub={t(`page-signup:platform.maxContentResolutionSimple.${v.maxContentResolution}`)}
          isChecked={selectedType === v.plan}
        />
      </LabelRadio>
    })
  }, [selectedType, onSelectedChange, t, data])
  return <>
    <div css={SignupPlatformCardListCss}>
      {cardList}
    </div>
    <PlatformInfoList large={false} plan={selectedType} />
  </>
}