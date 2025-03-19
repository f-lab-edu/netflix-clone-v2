import type { ChangeEventHandler } from 'react';
import { useTranslation } from 'next-i18next';
import { useCallback } from 'react';
import { DateEnTypeFilter, DateKrTypeFilter } from '@/lib/InputFilter';

const useDateChange = () => {
  const { i18n } = useTranslation()
  const onChangeEvent = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    if (i18n.language === 'kr') {
      e.target.value = DateKrTypeFilter(e.target.value)
    } else {
      e.target.value = DateEnTypeFilter(e.target.value)
    }
  }, [i18n])
  return onChangeEvent
}

const useDateChangeWithoutLocale = () => {
  const onChangeEvent = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    return DateKrTypeFilter(e.target.value, '-')
  }, [])
  return onChangeEvent
}
useDateChange.WithoutLocale = useDateChangeWithoutLocale

export default useDateChange
