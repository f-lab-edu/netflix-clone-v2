import { useTranslation } from 'next-i18next';
import LabelRadio from '@/components/ui/Form/LabelRadio';
import useMembershipList from '@/hooks/Query/membership/useMembershipList';
import { PlatformDetailLargeCardCss, PlatformDetailLargeCardCssSelected } from '../../styles/PlatformCardStyle';
import { SignupPlatformLargeCardListCss } from '../../styles/SignupPlayform';
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
  const { data } = useMembershipList()
  const { t } = useTranslation(['page-signup'])

  return <div css={SignupPlatformLargeCardListCss}>
    {data.list.map((v) => {
      const selected = selectedType === v.plan
      return <LabelRadio key={`radio-${v.plan}`}
        value={v.plan}
        name="platformCard"
        css={[PlatformDetailLargeCardCss, selected && PlatformDetailLargeCardCssSelected]}
        onChange={() => {
          onSelectedChange(v.plan)
        }}
      >
        <PlatformSlimCard
          css={{ margin: '8px', width: 'auto' }}
          alwaysBg
          value={v.plan}
          title={t(`page-signup:platform.tierTitles.${v.plan}`)}
          sub={t(`page-signup:platform.maxContentResolutionSimple.${v.maxContentResolution}`)}
          isChecked={selected}
        />
        <PlatformInfoList large={true} plan={v.plan} />
      </LabelRadio>
    })}
  </div>
}