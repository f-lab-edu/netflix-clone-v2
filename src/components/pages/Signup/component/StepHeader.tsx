import { Trans, useTranslation } from 'next-i18next'
import { StepHeaderStepCss, StepHeaderTitleCss } from '../styles/StepHeaderStyle';

interface StepHeaderProps {
  step: number
  title: string
  className?: string
}
export default function StepHeader({ title, step, className }: StepHeaderProps) {
  const { t } = useTranslation(['page-signup'])
  return <div className={className}>
    <span css={StepHeaderStepCss}>
      <Trans
        t={t}
        i18nKey={'page-signup:steps'}
        values={{ step }}
        components={{
          b: <b />,
        }}
      />
    </span>
    <h1 css={StepHeaderTitleCss}>{title}</h1>
  </div>
}