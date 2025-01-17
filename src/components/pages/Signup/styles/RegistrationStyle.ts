import { css } from '@emotion/react';
import LogoImage from '@assets/netflix/signup/signup-step3.png'

export const StepLogoPositionCss = css({
  margin: '100px auto 20px',
})

export const RegistrationLogoImageCss = css({
  backgroundImage: `url(${LogoImage.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPositionX: '50%',
  backgroundPositionY: '50%',
  backgroundSize: '260px',
  width: '260px',
  height: '90px',
})
