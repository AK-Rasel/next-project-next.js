

'node:13092) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)'

<h1>Install : npm install punycode</h1>

Updated next.config.mjs : 

''<p>/** @type {import('next').NextConfig} */
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
</p>
