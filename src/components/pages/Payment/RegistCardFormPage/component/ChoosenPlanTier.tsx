import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import useSelectedMembershipOnSteps from '../hooks/useSelectedMembershipOnSteps';
import { ChoosenPlanTierAreaStyle, ChoosenPlanTierChangeLinkStyle, ChoosenPlanTierMonthlyStyle, ChoosenPlanTierTitleStyle } from '../style/ChoosenPlanTierCss';

export default function ChoosenPlanTier() {
  const selectedMembershipOnSteps = useSelectedMembershipOnSteps()
  const { t, i18n } = useTranslation(['page-signup', 'page-payment'])
  return <div css={ChoosenPlanTierAreaStyle}>
    <p css={ChoosenPlanTierMonthlyStyle}>
      <span>
        {t('page-payment:firstMembership.monthly', { value: i18n.format(selectedMembershipOnSteps?.price, 'krwCurrency', i18n.language) })}
      </span>
    </p>
    <p css={ChoosenPlanTierTitleStyle}>
      <span>
        {selectedMembershipOnSteps?.plan ? t(`page-signup:platform.tierTitles.${selectedMembershipOnSteps.plan}`) : ''}
      </span>
    </p>
    <Link css={ChoosenPlanTierChangeLinkStyle} href='/signup/platform'>
      {t('page-payment:firstMembership.change')}
    </Link>
  </div>
} 