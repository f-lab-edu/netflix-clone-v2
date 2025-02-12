import { theme } from '../theme'
import { DividerCss, DividerHorizontalCss } from './style'

interface DividerProps extends CssProps {
  horizontal?: boolean
  color: string
}
const Divider = ({
  horizontal,
  color,
  ...props
}: DividerProps) => {
  return <div {...props} role='separator' css={[
    horizontal ? DividerHorizontalCss : DividerCss,
    {
      backgroundColor: color
    }
  ]} />
}

const DividerLight = (props: Omit<DividerProps, 'color'>) => {
  return <Divider {...props} color={theme.color.grey80.opacity70} />
}
Divider.Light = DividerLight

const DividerDark = (props: Omit<DividerProps, 'color'>) => {
  return <Divider {...props} color={theme.color.grey80.opacity40} />
}
Divider.Dark = DividerDark

export default Divider