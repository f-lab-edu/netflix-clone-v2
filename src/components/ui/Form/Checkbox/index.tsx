import type { InputLayoutValues } from '../InputLayout';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { useId, useMemo } from 'react';
import ErrorCross from '@/assets/netflix/error-cross.svg'
import ConditionalRender from '@/components/utils/ConditionalRender';
import InputLayout from '../InputLayout'
import { CheckboxDisplayAreaCss, CheckboxAreaShellCss, CheckboxDivCss, CheckboxLabelDefaultCss, CheckboxLabelFromTextCss, CheckboxTagDefaultCss, CheckboxErrorMessageCss, CheckboxErrorStateCss, CheckboxDisplayCss, CheckboxCheckedDisplayCss, CheckboxThemeCss, CheckboxValidStateCss } from './style';

export type CheckboxProps = {
  label?: ReactNode
} & InputLayoutValues & InputHTMLAttributes<HTMLInputElement> & CssProps

const Checkbox = ({
  label, className, error, isValid, ...props
}: CheckboxProps) => {
  const inputId = useId()
  const { ...inputProps } = props
  const isError = useMemo(() => Boolean(error), [error])
  const displayAreaCss = useMemo(() => {
    const temp = [CheckboxDisplayAreaCss]
    if (isValid) temp.push(CheckboxValidStateCss)
    if (isError) temp.push(CheckboxErrorStateCss)
    return temp
  }, [isValid, isError])
  return <InputLayout css={CheckboxDivCss} className={className}>
    <InputLayout.Shell css={CheckboxAreaShellCss}>
      <div css={displayAreaCss}>
        <InputLayout.Tag css={[CheckboxTagDefaultCss]} {...inputProps} id={inputId} type="checkbox" />
        <div css={CheckboxDisplayCss}></div>
        <div css={CheckboxCheckedDisplayCss}></div>
      </div>
      <InputLayout.Label css={[CheckboxLabelDefaultCss, CheckboxLabelFromTextCss]} htmlFor={inputId}>
        {label}
      </InputLayout.Label>
      <ConditionalRender.Boolean
        condition={isError && typeof error === 'string'}
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

const CheckboxLight = (props: CheckboxProps) =>
  <Checkbox {...props} css={CheckboxThemeCss.light} />
Checkbox.Light = CheckboxLight

const CheckboxDark = (props: CheckboxProps) =>
  <Checkbox {...props} css={CheckboxThemeCss.dark} />
Checkbox.Dark = CheckboxDark

export default Checkbox