import Image from 'next/image'
import { Trans } from 'next-i18next'
import StepHeader from '@/components/pages/Signup/component/StepHeader'
import { FirstRegistDescStepHeadCss, RegistDescPartDesc1Css, RegistDescPartDesc2Css, RegistDescPartDescShellCss, RegistDescPartImageCss, RegistDescPartShellCss } from '../styles/RegistDescPartStyle'

interface FirstRegistDescPartProps {
  step: number
  title: string
  desc1: string
  desc2: string
}
export default function FirstRegistDescPart(props: FirstRegistDescPartProps) {
  const { desc1, desc2, ...stepHeaderProps } = props
  return <div css={RegistDescPartShellCss}>
    <div>
      <Image src="/netflix/payment/registLock.png" width={50} height={50} alt="lock" css={RegistDescPartImageCss} />
    </div>
    <StepHeader
      {...stepHeaderProps}
      css={FirstRegistDescStepHeadCss}
    />
    <div css={RegistDescPartDescShellCss}>
      <p css={RegistDescPartDesc1Css}>
        {desc1}
      </p>
      <p css={RegistDescPartDesc2Css}>
        <Trans defaults={desc2} components={{ 'br': <br /> }} />
      </p>
    </div>
  </div>
}
