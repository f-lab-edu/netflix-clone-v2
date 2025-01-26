import Image from 'next/image'
import { RegistDescPartDesc1Css, RegistDescPartImageCss, RegistDescPartShellCss, RegistDescPartTitleCss } from '../styles/RegistDescPartStyle'

interface RegistDescPartProps {
  title: string
  desc1: string
}
export default function RegistDescPart({ title, desc1 }: RegistDescPartProps) {
  return <div css={RegistDescPartShellCss}>
    <div>
      <Image src="/netflix/payment/registLock.png" width={50} height={50} alt="lock" css={RegistDescPartImageCss} />
    </div>
    <h1 css={RegistDescPartTitleCss}>
      {title}
    </h1>
    <p css={RegistDescPartDesc1Css}>
      {desc1}
    </p>
  </div>
}