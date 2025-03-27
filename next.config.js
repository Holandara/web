/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          svgo: false,
          ref: true,
        }
      }]
    });
    return config;
  },
  images: {
    unoptimized: true
  }
};  