import type { Interpolation } from '@emotion/react';
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
  const onLanguageChange = (value: string | undefined) => {
    if (!value) return
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: value })
  }
  return <Select
    css={css}
    elementProps={{ css: { paddingLeft: 'calc(0.625rem + 1rem + 0.5rem)' } }}
    inputProps={{
      value: i18n.language,
      defaultValue: i18n.language,
      onChangeValue: onLanguageChange,
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