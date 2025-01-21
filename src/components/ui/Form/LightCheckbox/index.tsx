import type { CheckboxProps } from '../Checkbox';
import Checkbox from '../Checkbox';

const LegacyLightCheckbox = ({ placeholder, ...props }: CheckboxProps) => <Checkbox.Light {...props} label={placeholder} />

export default LegacyLightCheckbox