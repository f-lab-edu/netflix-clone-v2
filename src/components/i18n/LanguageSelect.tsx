import type { Interpolation } from '@emotion/react';
import type { ChangeEventHandler } from 'react';
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { languageList } from '@/lib/i18n/LanguageList'
import LangSvg from '@assets/netflix/lang-icon.svg'
import Select from '../ui/Form/Select'
import { theme } from '../ui/theme';

interface LanguageSelectProps {
  css?: Interpolation
}

export default function LanguageSelect({
  css
}: LanguageSelectProps) {

  const { t, i18n } = useTranslation(['common'])

  const router = useRouter()
  const onLanguageChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const value = e.target.value
    const { pathname, asPath, query } = router
    router.replace({ pathname, query }, asPath, { locale: value })
  }
  return <Select
    css={[css, { paddingLeft: 'calc(0.625rem + 1rem + 0.5rem)' }]}
    value={i18n.language}
    defaultValue={i18n.language}
    onChange={onLanguageChange}
    inputLayoutProps={{
      inputType: 'select',
      prefixChild: <div css={{
        color: theme.color.white.default,
        position: 'absolute',
        width: '1rem',
        height: '1rem',
        left: '0.75rem',
        right: 'auto',
        zIndex: 1
      }}>
        <LangSvg></LangSvg>
      </div>
    }}
  >
    {languageList.map((langCode) => {
      // @ts-expect-error @ts-ignore
      return <option value={langCode} key={langCode}>{t(`head.languages.${langCode}`)}</option>
    })}
  </Select>
}