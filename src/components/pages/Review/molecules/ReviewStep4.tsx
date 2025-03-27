import { HookFormRadioGroup } from '../atoms/RadioGroup';

export default function ReviewStep4() {
  return <section aria-label="form step4">
    <HookFormRadioGroup
      title='공개 여부'
      name='isPublic'
      items={[
        { text: '공개', value: 'true' },
        { text: '비공개', value: 'false' }
      ]}
      formRule={{
        required: true
      }}
    />
  </section>
}
