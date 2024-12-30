import type { Namespace } from 'i18next';
import type { SSRConfig, UserConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import I18nConfig from '@I18nConfig';

type ArrayElementOrSelf<T> = T extends ReadonlyArray<infer U> ? U[] : T[];

export const getServerTranslations = async (
  locale: string,
  namespacesRequired?: ArrayElementOrSelf<Namespace> | string | string[] | undefined,
  configOverride?: UserConfig,
  extraLocales?: string[] | false
): Promise<SSRConfig> => {
  const config = configOverride ?? I18nConfig
  return serverSideTranslations(locale, namespacesRequired, config, extraLocales)
}