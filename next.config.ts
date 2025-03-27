// next.config.ts
import { type Configuration } from 'webpack';

const nextConfig = {
  images: {
    domains: [],
  },
  webpack: (config: Configuration) => {
    config.module?.rules?.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;