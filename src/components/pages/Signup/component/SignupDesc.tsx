import CheckmarkStandard from '@/assets/netflix/signup/checkmark-standard.svg'
import { CheckmarkStandardCss, SignupDescStyle } from '../styles/SignupDescStyle'
interface SignupDescProps {
  desc: string
}

export default function SignupDesc({ desc }: Readonly<SignupDescProps>) {
  return <li css={SignupDescStyle}>
    <CheckmarkStandard css={CheckmarkStandardCss}></CheckmarkStandard>
    <span>{desc}</span>
  </li>
}
