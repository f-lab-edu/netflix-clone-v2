import { Html, Head, Main, NextScript } from 'next/document';
import I18nConfig from '@I18nConfig';

interface DocumentProps {
  locale: string
}

export default function Document({ locale }: DocumentProps) {
  const currentLocale = locale ??
    I18nConfig.i18n.defaultLocale
  return (
    <Html lang={currentLocale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
