import Image from 'next/image'
import { useMemo } from 'react'
import ConditionalRender from '../../utils/ConditionalRender'
import { EditableProfileImageBtnCss, EditableProfileImageIconCss, ProfileImageCss } from './style'

type ProfileImageSize = 'md' | 'lg' | 'sm'

interface ProfileImageProps {
  isEditable?: boolean
  profile: string
  alt: string
  size?: ProfileImageSize | number
  isAnimated?: boolean
}

export default function ProfileImage({
  profile, size, isEditable, alt,
  ...props
}: ProfileImageProps & CssProps) {
  const displaySize = useMemo(() => {
    switch (size) {
      case 'sm':
        return 32
      case 'md':
        return 40
      case 'lg':
        return 120
      default: return size || 0
    }
  }, [size])
  const imageMemo = useMemo(() => <Image
    css={ProfileImageCss}
    src={profile}
    width={displaySize}
    height={displaySize}
    alt={alt}
    {...props}
  />, [
    profile, displaySize, alt, props
  ])
  return <ConditionalRender.Boolean
    condition={isEditable || false}
    render={{
      true: <button css={EditableProfileImageBtnCss}>
        {imageMemo}
        <div css={EditableProfileImageIconCss}></div>
      </button>,
      false: imageMemo
    }}
  />
}