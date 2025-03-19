interface NormalContentProps {
  content: Content
  rank: number
}
export default function RankedContent({ content }: NormalContentProps) {
  return <div>
    {JSON.stringify(content)}
  </div>
}
