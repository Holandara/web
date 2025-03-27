// next.config.js
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'], // Adicione suporte a formatos modernos
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  }
}