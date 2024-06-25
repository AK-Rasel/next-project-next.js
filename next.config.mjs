/** @type {import('next').NextConfig} */
import { resolve } from 'path';

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Fixes npm packages that depend on `punycode` module
      config.resolve.alias['punycode'] = resolve('node_modules/punycode/');
    }
    return config;
  },
};

export default nextConfig;
