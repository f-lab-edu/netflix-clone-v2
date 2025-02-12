import type { NextConfig } from 'next';
import { withSentryConfig } from '@sentry/nextjs';
import i18nConfig from './next-i18next.config'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: i18nConfig.i18n,
  compiler: {
    styledJsx: false,
    emotion: true,
  },
  transpilePackages: ['jotai-devtools'],
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      }
    }
  }
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT
});
