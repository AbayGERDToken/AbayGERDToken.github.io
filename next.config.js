/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'export' for development mode - we'll use export only for production builds
  // output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
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
    ];
    return config;
  },
};

module.exports = nextConfig;





