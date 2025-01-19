import { css } from '@emotion/react';
import { BlackButtonCss, DefaultButtonCss, RedButtonCss } from '@/components/ui/Button/ButtonStyle';
import { TextDisplayCss } from '@/components/ui/Font/TextDisplayStyle';

export const ButtonGroupCss = css({
  height: '40px',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 500,
  fontSize: '1rem',
}, DefaultButtonCss, TextDisplayCss)

export const ButtonSubmitCss = css(ButtonGroupCss, RedButtonCss.color, RedButtonCss.interaction.dark)

export const ButtonActionCss = css(ButtonGroupCss, BlackButtonCss.color, BlackButtonCss.interaction.dark)
