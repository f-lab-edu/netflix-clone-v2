import type { InputHTMLAttributes } from 'react';
import { useId } from 'react';
import InputLayout from '../InputLayout'
import { CheckboxDisplayAreaCss, CheckboxAreaShellCss, CheckboxDivCss, CheckboxLabelDefaultCss, CheckboxLabelFromTextCss, CheckboxTagDefaultCss } from './style';

export default function DarkCheckbox({
  className, ...props
}: InputHTMLAttributes<HTMLInputElement> & CssProps) {
  const inputId = useId()
  const { ...inputProps } = props
  return <InputLayout css={CheckboxDivCss} className={className}>
    <InputLayout.Shell css={CheckboxAreaShellCss}>
      <div css={CheckboxDisplayAreaCss}>
        <InputLayout.Tag css={[CheckboxTagDefaultCss]} {...inputProps} id={inputId} type="checkbox" />
      </div>
      <InputLayout.Label css={[CheckboxLabelDefaultCss, CheckboxLabelFromTextCss]} htmlFor={inputId}>
        {props.placeholder}
      </InputLayout.Label>
    </InputLayout.Shell>
  </InputLayout>
}