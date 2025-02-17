interface NormalContentProps {
  content: Content
}
export default function NormalContent({ content }: NormalContentProps) {
  return <div>
    {JSON.stringify(content)}
  </div>
}