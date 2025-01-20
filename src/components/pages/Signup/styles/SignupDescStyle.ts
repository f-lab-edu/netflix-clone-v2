import { css } from '@emotion/react'
import { theme } from '@/components/ui/theme'

const checkboxStandardSize = '26px'

export const SignupDescStyle = css({
  display: 'grid',
  gridTemplateColumns: `${checkboxStandardSize} 1fr`,
  gap: '.5rem',
  font: 'inherit'
})

export const CheckmarkStandardCss = css({
  color: theme.color.red.default,
  fill: theme.color.red.default
})