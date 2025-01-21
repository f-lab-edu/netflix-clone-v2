import type { TextInputProps } from '../TextInput';
import TextInput from '../TextInput';

const LegacyLightTextInput = ({ placeholder, ...props }: Omit<TextInputProps, 'theme'>) => <TextInput.light {...props} label={placeholder} />
/**
 * @deprecated use TextInput.light component
 */
export default LegacyLightTextInput