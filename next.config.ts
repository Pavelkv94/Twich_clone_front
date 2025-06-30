import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/libs/i18n/request.ts');


const nextConfig: NextConfig = {
  reactStrictMode: true,
  // TODO: for s3 bucket
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.storage.test',
        port: '',
        pathname: '/**',
      }
    ]
  }
};

export default withNextIntl(nextConfig);
