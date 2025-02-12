import Image from 'next/image'
import { useMemo } from 'react'
import ConditionalRender from '../../utils/ConditionalRender'
import { EditableProfileImageBtnCss, EditableProfileImageIconCss, ProfileImageCss } from './style'
interface ProfileImageProps {
  isEditable?: boolean
  profile: string
  alt: string
  size?: number
  isAnimated?: boolean
}

const ProfileImage = ({
  profile, size, isEditable, alt,
  ...props
}: ProfileImageProps & CssProps) => {
  const displaySize = useMemo(() => {
    switch (size) {
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

ProfileImage.sm = (props: Omit<ProfileImageProps, 'size'>) => <ProfileImage size={32} {...props} />

ProfileImage.md = (props: Omit<ProfileImageProps, 'size'>) => <ProfileImage size={40} {...props} />

ProfileImage.lg = (props: Omit<ProfileImageProps, 'size'>) => <ProfileImage size={120} {...props} />

export default ProfileImage