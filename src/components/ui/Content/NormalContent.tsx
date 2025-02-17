import Image from 'next/image'

interface NormalContentProps {
  content: Content
}
export default function NormalContent({ content }: NormalContentProps) {
  return <div>
    <Image src={content.thumbnail} width={320} height={180} alt={content.title} />
  </div>
}