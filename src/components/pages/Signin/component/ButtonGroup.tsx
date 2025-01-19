import type { MouseEventHandler } from 'react';

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
    <button type="submit" onClick={onSubmitClick}>
      {submitText}
    </button>
    <p>
      {or}
    </p>
    <button type='button' onClick={onButtonClick}>
      {buttonText}
    </button>
  </>
}