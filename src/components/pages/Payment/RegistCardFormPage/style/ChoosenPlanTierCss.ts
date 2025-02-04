import { css } from '@emotion/react';
import { theme } from '@/components/ui/theme';

export const ChoosenPlanTierAreaStyle = css({
  background: theme.color.greyF4.default,
  borderRadius: theme.borderRadius.sm,
  display: 'grid',
  gridTemplateAreas: '"monthly change" "title change"',
  gridTemplateColumns: '1fr auto',
  rowGap: '5px',
  padding: '14px',
  marginTop: '10px',
})

export const ChoosenPlanTierMonthlyStyle = css({
  gridArea: 'monthly',
  fontWeight: 500,
  color: theme.color.grey33.default,
  fontSize: '1rem'
})

export const ChoosenPlanTierTitleStyle = css({
  gridArea: 'title',
  color: theme.color.grey73.default,
  fontSize: '1rem'
})

export const ChoosenPlanTierChangeLinkStyle = css({
  gridArea: 'change',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.color.blue.light.default
})