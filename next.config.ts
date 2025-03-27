// next.config.ts
import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  images: {
    domains: [],
  },
  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      config.resolve = config.resolve || {}; // Garante que resolve existe
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}), // Evita erro caso fallback não exista
        fs: false
      };
    }
    
    config.module = config.module || {}; // Garante que module existe
    config.module.rules = config.module.rules || []; // Garante que rules existe
    config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

    return config;
  }
};

export default nextConfig;
