import Image from 'next/image'

interface RegistDescPartProps {
  title: string
  desc1: string
}
export default function RegistDescPart({ title, desc1 }: RegistDescPartProps) {
  return <div>
    <Image src="/netflix/payment/registLock.png" width={50} height={50} alt="lock" />
    <p>
      {title}
    </p>
    <p>
      {desc1}
    </p>
  </div>
}