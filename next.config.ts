import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [],
  },
  webpack: (config: any) => { 
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  }
};

export default nextConfig;