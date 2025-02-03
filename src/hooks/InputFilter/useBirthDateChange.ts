import type { ChangeEventHandler } from 'react';
import { useTranslation } from 'next-i18next';
import { useCallback } from 'react';
import { BirthDateEnTypeFilter, BirthDateKrTypeFilter } from '@/lib/InputFilter';

export default function useBirthDateChange() {
  const { i18n } = useTranslation()
  const onChangeEvent = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    if (i18n.language === 'kr') {
      e.target.value = BirthDateKrTypeFilter(e.target.value)
    } else {
      e.target.value = BirthDateEnTypeFilter(e.target.value)
    }
  }, [i18n])
  return onChangeEvent
}