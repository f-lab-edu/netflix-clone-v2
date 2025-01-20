import type { InputLayoutValues } from '../InputLayout';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { useId, useMemo } from 'react';
import ErrorCross from '@/assets/netflix/error-cross.svg'
import ConditionalRender from '../../utils/ConditionalRender';
import InputLayout from '../InputLayout'
import { CheckboxDisplayAreaCss, CheckboxAreaShellCss, CheckboxDivCss, CheckboxLabelDefaultCss, CheckboxLabelFromTextCss, CheckboxTagDefaultCss, CheckboxErrorMessageCss, CheckboxErrorStateCss, CheckboxDisplayCss, CheckboxCheckedDisplayCss } from './style';

interface CheckboxProps extends InputLayoutValues {
  placeholder: ReactNode
}

export default function LightCheckbox({
  placeholder, className, error, ...props
}: Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> & CssProps & CheckboxProps) {
  const inputId = useId()
  const { ...inputProps } = props
  const isError = useMemo(() => Boolean(error), [error])
  const layoutStyle = useMemo(() => {
    const temp = [CheckboxDivCss]
    if (isError) temp.push(CheckboxErrorStateCss)
    return temp
  }, [isError])
  return <InputLayout css={layoutStyle} className={className}>
    <InputLayout.Shell css={CheckboxAreaShellCss}>
      <div css={CheckboxDisplayAreaCss}>
        <InputLayout.Tag css={[CheckboxTagDefaultCss]} {...inputProps} id={inputId} type="checkbox" />
        <div css={CheckboxDisplayCss}></div>
        <div css={CheckboxCheckedDisplayCss}></div>
      </div>
      <InputLayout.Label css={[CheckboxLabelDefaultCss, CheckboxLabelFromTextCss]} htmlFor={inputId}>
        {placeholder}
      </InputLayout.Label>
      <ConditionalRender.Boolean
        condition={isError}
        render={{
          true: <InputLayout.Error css={CheckboxErrorMessageCss}>
            <ErrorCross css={{
              marginRight: '0.25rem',
              top: '.1872rem',
              position: 'relative'
            }} key={'error-cross'} />
            {error}
          </InputLayout.Error>
        }}
      />
    </InputLayout.Shell>
  </InputLayout>
}