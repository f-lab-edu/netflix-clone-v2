import type { InputLayoutValues } from '../InputLayout';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { useId, useMemo } from 'react';
import ErrorCross from '@/assets/netflix/error-cross.svg'
import ConditionalRender from '@/components/utils/ConditionalRender';
import InputLayout from '../InputLayout'
import { InputAreaShellCss, InputDefaultStateCss, InputDivCss, InputErrorDivCss, InputErrorStateCss, InputLabelDefaultCss, InputLabelFromTextCss, InputOutlineCss, InputTagDefaultCss, InputTagFromTextCss, InputThemeCss, InputValidatedStateCss } from './style';

export type TextInputProps = {
  label?: string
  postfix?: ReactNode
} & InputLayoutValues & CssProps & InputHTMLAttributes<HTMLInputElement>

const TextInput = ({
  error,
  isValid,
  className,
  label,
  placeholder,
  ...inputProps
}: TextInputProps) => {
  const inputId = useId()
  const isError = useMemo(() => Boolean(error), [error])
  const layoutStyle = useMemo(() => {
    const temp = [InputDivCss, InputDefaultStateCss]
    if (isValid) temp.push(InputValidatedStateCss)
    if (isError) temp.push(InputErrorStateCss)
    return temp
  }, [isValid, isError])
  return <InputLayout css={layoutStyle} className={className}>
    <InputLayout.Shell css={InputAreaShellCss}>
      <InputLayout.Label css={[InputLabelDefaultCss, InputLabelFromTextCss]} htmlFor={inputId}>
        {label}
      </InputLayout.Label>
      <InputLayout.Tag css={[InputTagDefaultCss, InputTagFromTextCss]} placeholder={placeholder || ''} {...inputProps} id={inputId} />
      <InputLayout.Outline css={InputOutlineCss} />
    </InputLayout.Shell>
    <ConditionalRender.Boolean
      condition={isError && typeof error === 'string'}
      render={{
        true: <InputLayout.Error css={InputErrorDivCss}>
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

const TextInputLight = (props: TextInputProps) =>
  <TextInput {...props} css={InputThemeCss.light} />
TextInput.Light = TextInputLight

const TextInputDark = (props: TextInputProps) =>
  <TextInput {...props} css={InputThemeCss.dark} />
TextInput.Dark = TextInputDark

export default TextInput