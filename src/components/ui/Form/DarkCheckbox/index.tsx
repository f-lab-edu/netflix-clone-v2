import type { CheckboxProps } from '../Checkbox';
import Checkbox from '../Checkbox';

const LegacyDarkCheckbox = ({ placeholder, ...props }: CheckboxProps) => <Checkbox.Dark {...props} label={placeholder} />

export default LegacyDarkCheckbox
