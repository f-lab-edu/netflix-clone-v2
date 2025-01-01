import type { Interpolation } from '@emotion/react';
import { Trans, useTranslation } from 'next-i18next'

interface StepHeaderProps {
  step: number,
  title: string
  css?: Interpolation
}
export default function StepHeader({ title, step, css }: StepHeaderProps) {
  const { t } = useTranslation(['page-signup'])
  // TODO: add Style
  return <div css={css}>
    {/* TODO: add style */}
    <span>
      <Trans
        t={t}
        i18nKey={'page-signup:steps'}
        values={{ step }}
        components={{
          b: <b />,
        }}
      />
    </span>
    {/* TODO: add style */}
    <h1>{title}</h1>
  </div>
}