import type { NextConfig } from 'next';
import { withSentryConfig } from '@sentry/nextjs';
import i18nConfig from './next-i18next.config'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: i18nConfig.i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'file.koreafilm.or.kr'
      }
    ]
  },
  compiler: {
    styledJsx: false,
    emotion: true,
  },
  transpilePackages: ['jotai-devtools'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT
});
