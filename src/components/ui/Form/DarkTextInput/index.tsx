import type { InputLayoutValues } from '../InputLayout';
import type { InputHTMLAttributes } from 'react';
import { useId, useMemo } from 'react';
import ErrorCross from '@/assets/netflix/error-cross.svg'
import ConditionalRender from '../../utils/ConditionalRender';
import InputLayout from '../InputLayout'
import { InputAreaShellCss, InputDefaultStateCss, InputDivCss, InputErrorStateCss, InputLabelDefaultCss, InputLabelFromTextCss, InputOutlineCss, InputTagDefaultCss, InputTagFromTextCss, InputValidatedStateCss } from './style';

type TextInputProps = InputLayoutValues & CssProps

export default function DarkTextInput({
  ...props
}: InputHTMLAttributes<HTMLInputElement> & TextInputProps) {
  const inputId = useId()
  const { error, isValid, ...inputProps } = props
  const isError = useMemo(() => Boolean(error), [error])
  const layoutStyle = useMemo(() => {
    const temp = [InputDivCss, InputDefaultStateCss]
    if (isValid) temp.push(InputValidatedStateCss)
    if (isError) temp.push(InputErrorStateCss)
    return temp
  }, [isValid, isError])
  return <InputLayout css={layoutStyle}>
    <InputLayout.Shell css={InputAreaShellCss}>
      <InputLayout.Label css={[InputLabelDefaultCss, InputLabelFromTextCss]} htmlFor={inputId}>
        {props.placeholder}
      </InputLayout.Label>
      <InputLayout.Tag css={[InputTagDefaultCss, InputTagFromTextCss]} {...inputProps} id={inputId} />
      <InputLayout.Outline css={InputOutlineCss} />
    </InputLayout.Shell>
    <ConditionalRender.Boolean
      condition={isError}
      render={{
        true: <InputLayout.Error>
          <ErrorCross css={{
            marginRight: '0.25rem',
            top: '.1872rem',
            position: 'relative'
          }} key={'error-cross'} />
          {error}
        </InputLayout.Error>
      }}
    />
  </InputLayout>
}