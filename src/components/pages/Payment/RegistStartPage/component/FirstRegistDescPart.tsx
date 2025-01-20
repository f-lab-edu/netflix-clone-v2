import Image from 'next/image'
import { Trans } from 'next-i18next'
import StepHeader from '@/components/pages/Signup/component/StepHeader'

interface FirstRegistDescPartProps {
  step: number
  title: string
  desc1: string
  desc2: string
}
export default function FirstRegistDescPart(props: FirstRegistDescPartProps) {
  const { desc1, desc2, ...stepHeaderProps } = props
  return <div>
    <Image src="/netflix/payment/registLock.png" width={50} height={50} alt="lock" />
    <StepHeader
      {...stepHeaderProps}
    />
    <p>
      {desc1}
    </p>
    <p>
      <Trans defaults={desc2} components={{ 'br': <br /> }} />
    </p>
  </div>
}