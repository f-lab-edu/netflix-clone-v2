import type { ChangeEventHandler } from 'react';
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { languageList } from '@/lib/i18n/LanguageList'
import LangSvg from '@assets/netflix/lang-icon.svg'
import DarkSelect from '../ui/Form/DarkSelect';

export default function LanguageSelect() {
  const { t, i18n } = useTranslation(['common'])

  const router = useRouter()
  const onLanguageChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const value = e.target.value
    const { pathname, asPath, query } = router
    router.replace({ pathname, query }, asPath, { locale: value })
  }
  return <DarkSelect
    prefix={<LangSvg />}
    prefixSize='1rem'
    defaultValue={i18n.language}
    onChange={onLanguageChange}
  >
    {languageList.map((langCode) => {
      // @ts-expect-error @ts-ignore
      return <option value={langCode} key={langCode}>{t(`head.languages.${langCode}`)}</option>
    })}
  </DarkSelect>
}
