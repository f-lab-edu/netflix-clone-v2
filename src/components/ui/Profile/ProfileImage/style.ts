import { css } from '@emotion/react';
import { theme } from '../../theme';

export const ProfileImageCss = css({
  borderRadius: theme.borderRadius.xs,
})

export const EditableProfileImageBtnCss = css({
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center'
})

export const EditableProfileImageIconCss = css({
  position: 'absolute',
  width: '40%',
  height: '40%'
})