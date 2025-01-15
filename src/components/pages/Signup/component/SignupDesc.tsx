interface SignupDescProps {
  desc: string
}
export default function SignupDesc({ desc }: Readonly<SignupDescProps>) {
  return <li>
    {/* add: check svg */}
    <span>{desc}</span>
  </li>
}