import type { MouseEventHandler } from 'react';
import { ButtonActionCss, ButtonSubmitCss } from '../styles/ButtonGroupStyle';

interface ButtonGroupProps {
  submitText: string
  or: string
  buttonText: string
  onSubmitClick?: MouseEventHandler
  onButtonClick?: MouseEventHandler
}
export default function ButtonGroup({
  submitText,
  onSubmitClick,
  or,
  buttonText,
  onButtonClick
}: ButtonGroupProps) {
  return <>
    <button css={ButtonSubmitCss} type="submit" onClick={onSubmitClick}>
      {submitText}
    </button>
    <p>
      {or}
    </p>
    <button css={ButtonActionCss} type='button' onClick={onButtonClick}>
      {buttonText}
    </button>
  </>
}
