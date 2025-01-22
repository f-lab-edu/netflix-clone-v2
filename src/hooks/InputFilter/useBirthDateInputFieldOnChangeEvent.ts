import type { ChangeEventHandler } from 'react';
import { useTranslation } from 'next-i18next';
import { useCallback } from 'react';
import { BirthDateInputFieldOnChangeEventForEn, BirthDateInputFieldOnChangeEventForKr } from '@/lib/InputFilter';

export default function useBirthDateInputFieldOnChangeEvent() {
  const { i18n } = useTranslation()
  const onChangeEvent = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    if (i18n.language === 'kr') {
      BirthDateInputFieldOnChangeEventForKr(e)
    } else {
      BirthDateInputFieldOnChangeEventForEn(e)

    }
  }, [i18n])
  return onChangeEvent
}