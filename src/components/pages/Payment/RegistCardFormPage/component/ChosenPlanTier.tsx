import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import useSelectedMembershipOnSteps from '../hooks/useSelectedMembershipOnSteps';
import { ChosenPlanTierAreaStyle, ChosenPlanTierChangeLinkStyle, ChosenPlanTierMonthlyStyle, ChosenPlanTierTitleStyle } from '../style/ChosenPlanTierCss';

export default function ChosenPlanTier() {
  const selectedMembershipOnSteps = useSelectedMembershipOnSteps()
  const { t, i18n } = useTranslation(['page-signup', 'page-payment'])
  return <div css={ChosenPlanTierAreaStyle}>
    <p css={ChosenPlanTierMonthlyStyle}>
      <span>
        {t('page-payment:firstMembership.monthly', { value: i18n.format(selectedMembershipOnSteps?.price, 'krwCurrency', i18n.language) })}
      </span>
    </p>
    <p css={ChosenPlanTierTitleStyle}>
      <span>
        {selectedMembershipOnSteps?.plan ? t(`page-signup:platform.tierTitles.${selectedMembershipOnSteps.plan}`) : ''}
      </span>
    </p>
    <Link css={ChosenPlanTierChangeLinkStyle} href='/signup/platform'>
      {t('page-payment:firstMembership.change')}
    </Link>
  </div>
} 
