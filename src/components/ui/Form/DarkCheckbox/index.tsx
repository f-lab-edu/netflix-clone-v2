import type { CheckboxProps } from '../Checkbox';
import Checkbox from '../Checkbox';

const LegacyDarkCheckbox = ({ placeholder, ...props }: CheckboxProps) => <Checkbox.dark {...props} label={placeholder} />

export default LegacyDarkCheckbox