import type { TextInputProps } from '../TextInput';
import TextInput from '../TextInput';

const LegacyDarkTextInput = ({ placeholder, ...props }: Omit<TextInputProps, 'theme'>) => <TextInput.Dark {...props} label={placeholder} />
/**
 * @deprecated use TextInput.dark component
 */
export default LegacyDarkTextInput