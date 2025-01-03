/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next'
// resources.ts file is generated with `npm run toc`
import type common from '../../public/locales/en/common.json'
import type PageHome from '../../public/locales/en/page-home.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: {
      common: typeof common,
      'page-home': typeof PageHome
    }
  }
}