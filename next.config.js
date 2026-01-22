/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  webpack: (config, { isServer }) => {
    // Suppress warnings about missing optional dependencies
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      { module: /@react-native/ },
      { module: /@metamask/ },
      { module: /permissionless/ },
      { module: /ox/ },
    ];
    return config;
  },
};

module.exports = nextConfig;





