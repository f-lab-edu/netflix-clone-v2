import type { NextConfig } from 'next';
import i18nConfig from './next-i18next.config'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: i18nConfig.i18n,
  compiler: {
    styledComponents: true
  },
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

export default nextConfig;
