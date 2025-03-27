import type { RadioGroupProps } from './types';
import LabelRadio from '@/components/ui/Form/LabelRadio';

export default function RadioGroup({ title, items: options, ...inputProps }: RadioGroupProps) {
  return <fieldset>
    <legend>{title}</legend>
    <ul role="group">
      {
        options.map(option => <li key={option.value}>
          <LabelRadio
            value={option.value}
            {...inputProps}
          >
            {option.text}
          </LabelRadio>
        </li>)
      }
    </ul>
  </fieldset>
}
