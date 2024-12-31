import { useTranslation } from 'next-i18next'

export default function useValidator() {
  const { t } = useTranslation('common')
  return {
    emailTypeCheck: (v: string) => {
      return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(v)
        || t('form.email.error.pattern')
    }
  }
}